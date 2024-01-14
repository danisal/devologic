import { load_BlogPost } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
	const slug = event.params.slug;

	return {
		...(await load_BlogPost({ event, variables: { slug, language: 'pt_PT' } }))
	};
}
