import type { PrivacyPolicyVariables } from './$houdini';

export const _PrivacyPolicyVariables: PrivacyPolicyVariables = async ({ parent }) => {
	const { locales } = await parent();
	return { locales };
};
