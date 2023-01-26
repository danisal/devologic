import { MAIL_GUN_EMAIL_FROM, MAIL_GUN_EMAIL_TO, MAIL_GUN_ENDPOINT, MAIL_GUN_KEY } from '$env/static/private';
import { error, fail } from '@sveltejs/kit';
import { z, ZodError } from 'zod';
import type { Actions } from './$types';

const FormSchema = z.object({
	name: z
		.string({ required_error: 'O nome é obrigatório' })
		.min(2, 'O nome deve ter pelo menos 2 caracteres')
		.max(64, 'O nome pode ter, no máximo, 64 caracteres')
		.trim(),
	email: z.string().email('O e-mail deve ser um endereço de e-mail válido'),
	subject: z
		.string()
		.min(2, 'O assunto deve ter pelo menos 2 caracteres')
		.max(64, 'O assunto pode ter no máximo 64 caracteres')
		.trim(),
	message: z
		.string()
		.min(10, 'A mensagem deve ter pelo menos 10 caracteres')
		.max(500, 'A mensagem pode ter, no máximo, 500 caracteres')
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
			if (err instanceof ZodError) {
				const { fieldErrors } = err.flatten() satisfies FlattenedErrors;

				return fail(400, { errors: fieldErrors, data: contactFormData });
			}

			throw error(err.status, err.message);
		}
	},
};
