import type { AfterLoadEvent, BlogPostVariables } from './$houdini';
import type { MetaTagsProps } from 'svelte-meta-tags';

export const _BlogPostVariables: BlogPostVariables = async ({ params, parent, url }) => {
	const { slug } = params;
	const { locales } = await parent();

	return {
		slug,
		locales,
	};
};

export function _houdini_afterLoad({ data, event }: AfterLoadEvent) {
	return {
		pageMetaTags: {
			description: data.BlogPost.blogPosts[0].intro,
			title: data.BlogPost.blogPosts[0].mainHeading,
			openGraph: {
				title: data.BlogPost.blogPosts[0].mainHeading,
				description: data.BlogPost.blogPosts[0].intro,
				type: 'article',
				images: [
					{
						url: data.BlogPost.blogPosts[0].heroImage?.url,
						alt: data.BlogPost.blogPosts[0].heroImage?.alt,
					},
				],
				url: event.url.href,
			},
			twitter: {
				cardType: 'summary_large_image',
				title: data.BlogPost.blogPosts[0].mainHeading,
				description: data.BlogPost.blogPosts[0].intro,
				image: data.BlogPost.blogPosts[0].heroImage?.url,
				imageAlt: data.BlogPost.blogPosts[0].heroImage?.alt,
				site: event.url.href,
			},
		} satisfies MetaTagsProps,
	};
}
