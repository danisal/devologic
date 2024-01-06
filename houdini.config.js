/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'env:VITE_HYGRAPH_URL'
	},
	scalars: {
		DateTime: {
			type: 'Date',
			marshal(val) {
				return val.getTime();
			},
			unmarshal(val) {
				return new Date(val);
			}
		}
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
