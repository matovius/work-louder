export interface Link {
	label: string;
	url: string;
}

export const NavLinks: Link[] = [
	{
		label: 'store',
		url: '/store'
	},
	{
		label: 'setup',
		url: '/setup'
	},
	{
		label: 'about',
		url: '/about'
	},
	{
		label: 'updates',
		url: '/updates'
	}
];

export const SocialLinks: Link[] = [
	{
		label: 'twitter/x',
		url: 'https://x.com/worklouder'
	},
	{
		label: 'instagram',
		url: 'https://instagram.com/worklouder'
	},
	{
		label: 'tiktok',
		url: 'https://tiktok.com/worklouder'
	},
	{
		label: 'threads',
		url: 'https://threads.net/worklouder'
	},
	{
		label: 'discord',
		url: 'https://discord.com/worklouder'
	}
];

export const DummyLegalLinks: Link[] = [
	{
		label: 'affiliate program',
		url: '#'
	},
	{
		label: 'terms of service',
		url: '#'
	},
	{
		label: 'return policy',
		url: '#'
	},
	{
		label: 'privacy policy',
		url: '#'
	},
	{
		label: 'terms and conditions',
		url: '#'
	}
];

export const LegalLinks: Link[] = [
	{
		label: 'affiliate program',
		url: '/affiliate-program'
	},
	{
		label: 'terms of service',
		url: '/terms-of-service'
	},
	{
		label: 'return policy',
		url: '/return-policy'
	},
	{
		label: 'privacy policy',
		url: '/privacy-policy'
	},
	{
		label: 'terms and conditions',
		url: '/terms-and-conditions'
	}
];
