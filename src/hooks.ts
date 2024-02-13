import type { Reroute } from '@sveltejs/kit';

const translated: Record<string, string> = {
	'/pt/sobre': '/pt/about',
	'/pt/servicos': '/pt/services',
	'/pt/politica-privacidade': '/pt/privacy-policy',
	'/pt/contacto': '/pt/contact',
};
export const reroute: Reroute = ({ url }) => {
	if (url.pathname in translated) {
		return translated[url.pathname];
	}
};
