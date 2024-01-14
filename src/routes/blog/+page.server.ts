import { BlogPostsStore } from '$houdini';
import type { Locale } from '../../utils/locale';
import type { PageServerLoad } from './$houdini';

export const load: PageServerLoad = async (event) => {
	const locale = event.cookies.get('locale') ?? 'en';
	const query = new BlogPostsStore();
	const { data } = await query.fetch({
		event,
		variables: { language: locale as Locale }
	});

	return {
		...data
	};
};
