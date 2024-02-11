import type { Reroute } from '@sveltejs/kit';

const translated: Record<string, string> = {
	'/about': '/about',
	'/sobre': '/about',
};
export const reroute: Reroute = ({ url, ...rest }) => {
	console.log('reroute', rest);

	if (url.pathname in translated) {
		return translated[url.pathname];
	}
};
