import { HoudiniClient } from '$houdini';
const HYGRAPH_URL = import.meta.env.VITE_HYGRAPH_URL;

export default new HoudiniClient({
	url: HYGRAPH_URL

	// uncomment this to configure the network call (for things like authentication)
	// for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
	// fetchParams({ session }) {
	//     return {
	//         headers: {
	//             Authentication: `Bearer ${session.token}`,
	//         }
	//     }
	// }
});
