/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	watchSchema: {
		url: 'env:VITE_HYGRAPH_URL',
	},
	scalars: {
		DateTime: {
			type: 'Date',
			marshal(val) {
				return val.getTime();
			},
			unmarshal(val) {
				return new Date(val);
			},
		},
		Json: {
			type: 'JSON',
			marshal(val) {
				return val;
			},
			unmarshal(val) {
				return val;
			},
		},
	},
	types: {
		HomePage: {
			keys: ['locale'],
		},
		BlogPost: {
			keys: ['locale', 'id'],
		},
		Article: {
			keys: ['locale', 'id'],
		},
		CallOut: {
			keys: ['locale', 'id'],
		},
		Testimonial: {
			keys: ['locale', 'id'],
		},
		Layout: {
			keys: ['locale', 'id'],
		},
		FooterLink: {
			keys: ['locale', 'id'],
		},
		KeyValue: {
			keys: ['locale', 'id'],
		},
		PrivacyPolicy: {
			keys: ['locale', 'id'],
		},
	},
	plugins: {
		'houdini-svelte': {},
	},
};

export default config;
