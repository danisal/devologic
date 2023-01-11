import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';

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

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);

		console.log(formData);

		try {
			const result = FormSchema.parse(formData);

			return { data: result };
		} catch (error) {
			const { fieldErrors: errors } = error.flatten();

			return { errors };
		}
	},
};
