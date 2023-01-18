import {
	MAIL_GUN_EMAIL_FROM,
	MAIL_GUN_EMAIL_TO,
	MAIL_GUN_ENDPOINT,
	MAIL_GUN_KEY,
	MAIL_GUN_USERNAME,
} from '$env/static/private';
import { fail } from '@sveltejs/kit';
import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { z, ZodError } from 'zod';
import type { Actions } from './$types';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
	username: MAIL_GUN_USERNAME,
	key: MAIL_GUN_KEY,
});

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
	contact: async ({ request }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);

		try {
			const result = FormSchema.parse(formData);

			mg.messages.create(MAIL_GUN_ENDPOINT, {
				from: MAIL_GUN_EMAIL_FROM,
				to: [MAIL_GUN_EMAIL_TO],
				subject: 'Devologic - New Contact',
				text: `Devologic contact form received a new message.
          Message:
          ${JSON.stringify(result, null, 2)}
        `,
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
