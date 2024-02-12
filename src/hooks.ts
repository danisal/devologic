import type { Reroute } from '@sveltejs/kit';

const translated: Record<string, string> = {
	'/pt/sobre': '/about',
	'/pt/servicos': '/services',
	'/pt/politica-privacidade': '/privacy-policy',
	'/pt/contacto': '/contact',
};
export const reroute: Reroute = ({ url }) => {
	if (url.pathname in translated) {
		return translated[url.pathname];
	}
};
