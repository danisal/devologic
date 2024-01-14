import type { LayoutServerLoad } from './$types';
import { DEFAULT_LANGUAGE } from '../utils/locale';

export const load: LayoutServerLoad = async (event) => {
	let locale = event.cookies.get('locale');

	if (!locale) {
		event.cookies.set('locale', DEFAULT_LANGUAGE, {
			maxAge: 60 * 60 * 24 * 30,
			path: '/',
			sameSite: 'strict'
		});

		locale = DEFAULT_LANGUAGE;
	}

	return {
		locale
	};
};
