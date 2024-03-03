import type { Actions } from './$types';

export const actions = {
	locale: async ({ cookies, request }) => {
		const data = await request.formData();
		const locale = data.get('locale');

		if (!locale) {
			return;
		}

		cookies.set('locale', locale.toString(), {
			maxAge: 60 * 60 * 24 * 30,
			path: '/',
			sameSite: 'strict',
		});
	},
} satisfies Actions;
