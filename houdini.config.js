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
	types: {
		HomePage: {
			keys: ['locale']
		},
		BlogPost: {
			keys: ['locale', 'id']
		},
		Article: {
			keys: ['locale', 'id']
		},
		CallOut: {
			keys: ['locale', 'id']
		},
		Testimonial: {
			keys: ['locale', 'id']
		}
	},
	plugins: {
		'houdini-svelte': {}
	}
};

export default config;
