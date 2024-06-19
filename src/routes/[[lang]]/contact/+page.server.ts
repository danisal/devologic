import type { Actions } from './$types';
import { MAIL_GUN_EMAIL_FROM, MAIL_GUN_EMAIL_TO, MAIL_GUN_ENDPOINT, MAIL_GUN_KEY } from '$env/static/private';
import { error, fail } from '@sveltejs/kit';
import { z, ZodError } from 'zod';
// this is a test message with more than 10 characters

export const prerender = false;

const FormSchema = z.object({
	firstName: z
		.string({ required_error: 'Name is required' })
		.min(2, 'First Name must be at least 2 characters long')
		.max(64, 'First Name can have at most 64 characters')
		.trim(),
	lastName: z
		.string({ required_error: 'Name is required' })
		.min(2, 'Last Name must be at least 2 characters long')
		.max(64, 'Last Name can have at most 64 characters')
		.trim(),
	email: z.string().email('Email must be a valid email address'),
	phoneNumber: z
		.string()
		.min(2, 'Phone number must be at least 2 characters long')
		.max(64, 'Phone number can have at most 64 characters'),
	message: z
		.string()
		.min(10, 'Message must be at least 10 characters long')
		.max(500, 'Message can have at most 500 characters')
		.trim(),
});

type FlattenedErrors = z.inferFlattenedErrors<typeof FormSchema>;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const contactFormData = Object.fromEntries(data);

		console.log(contactFormData);

		try {
			const result = FormSchema.parse(contactFormData);

			console.log(result);

			const body = new FormData();
			body.append('from', MAIL_GUN_EMAIL_FROM);
			body.append('to', MAIL_GUN_EMAIL_TO);
			body.append('subject', 'Devologic - New Contact');
			body.append(
				'text',
				`Devologic contact form received a new message.
      Message:
      ${JSON.stringify(result, null, 2)}
    `,
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
			if (err instanceof ZodError) {
				const { fieldErrors } = err.flatten() satisfies FlattenedErrors;

				return fail(400, { errors: fieldErrors, data: contactFormData });
			}

			// @ts-expect-error
			throw error(err.status, err.message);
		}
	},
} satisfies Actions;
