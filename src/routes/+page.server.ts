import { MAIL_GUN_EMAIL_FROM, MAIL_GUN_EMAIL_TO, MAIL_GUN_KEY } from '$env/static/private';
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

type FlattenedErrors = z.inferFlattenedErrors<typeof FormSchema>;

export const actions: Actions = {
	contact: async ({ fetch, request }) => {
		const data = await request.formData();
		const contactFormData = Object.fromEntries(data);

		try {
			const result = FormSchema.parse(contactFormData);

			const body = new FormData();
			body.append('from', MAIL_GUN_EMAIL_FROM);
			body.append('to', MAIL_GUN_EMAIL_TO);
			body.append('subject', 'Devologic - New Contact');
			body.append(
				'text',
				`Devologic contact form received a new message.
      Message:
      ${JSON.stringify(result, null, 2)}
    `
			);

			await fetch(`https://api.mailgun.net/v3/${MAIL_GUN_ENDPOINT}/messages`, {
				method: 'POST',
				body,
				headers: {
					Authorization: 'Basic ' + btoa('api' + ':' + `${MAIL_GUN_KEY}`),
				},
			});

			return { success: true };
		} catch (err) {
			if (err) {
				if (err instanceof ZodError) {
					const { fieldErrors } = err.flatten() satisfies FlattenedErrors;

					return fail(400, { errors: fieldErrors, data: contactFormData });
				}
			}
		}
	},
};
