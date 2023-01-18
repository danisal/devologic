import { fail } from '@sveltejs/kit';
import { z, ZodError } from 'zod';

import type { Actions } from './$types';

const FormSchema = z.object({
	name: z
		.string({ required_error: 'Name is required' })
		.min(2, 'Name must be at least 2 characters long')
		.max(64, 'Name can have at most 64 characters')
		.trim(),
	email: z.string().email('Email must be a valid email address'),
	subject: z
		.string()
		.min(2, 'Subject must be at least 2 characters long')
		.max(64, 'Subject can have at most 64 characters')
		.trim(),
	message: z
		.string()
		.min(10, 'Message must be at least 10 characters long')
		.max(500, 'Message can have at most 500 characters')
		.trim(),
});

type Form = z.infer<typeof FormSchema>;

export const actions: Actions = {
	contact: async ({ request, fetch }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);

		console.log(formData);

		try {
			const result = FormSchema.parse(formData);

			await fetch('https://webhook.site/e72b80d0-1eeb-4d40-b7da-c10b3473fb55', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(result),
			});

			return { data: result };
		} catch (error) {
			if (error instanceof ZodError<Form>) {
				const { fieldErrors: errors } = error.flatten();

				return fail(400, { errors, data: formData });
			}
		}
	},
};
