import type { TechnologyCategory, ProfessionalExperience, PersonalProject, Study, LanguageSkill, SocialLink } from './types';

export const SITE_CONFIG = {
	title: 'Alexander Chwojewski - Software Developer',
	description: 'Explore Alexander Chwojewski\'s software development portfolio',
	url: 'https://alexander.chwojewski.com',
	email: 'alexander@chwojewski.com',
	author: 'Alexander Chwojewski'
};

export const TECHNOLOGIES: TechnologyCategory[] = [
	{
		category: 'Python',
		items: ['Flask', 'Django', 'FastAPI']
	},
	{
		category: 'JavaScript',
		items: ['Vanilla', 'TypeScript', 'NodeJS', 'jQuery', 'Electron', 'JerryScript']
	},
	{
		category: 'Scripting',
		items: ['Lua', 'Pawn', 'AngelScript', 'Bash', 'PowerShell']
	},
	{
		category: 'Databases',
		items: ['MariaDB', 'MySQL', 'PostgreSQL', 'MongoDB']
	},
	{
		category: 'CI/CD',
		items: ['Jenkins', 'AWS CodeDeploy', 'AWS CodePipeline', 'GitHub Actions']
	},
	{
		category: 'Virtualization',
		items: ['LxC', 'KVM', 'Proxmox', 'VirtualBox', 'VMWare', 'Hyper-V', 'Docker']
	},
	{
		category: 'VPN',
		items: ['Wireguard', 'Twingate']
	},
	{
		category: 'Cloud',
		items: ['Amazon Web Services', 'Azure', 'OVH']
	},
	{
		category: 'Brokers',
		items: ['RabbitMQ', 'Redis']
	},
	{
		category: 'MFT',
		items: ['Cerberus FTP', 'GoAnywhere', 'CDATA ARC', 'Crush FTP']
	},
	{
		category: 'Web Design',
		items: ['HTML5', 'CSS', 'Svelte', 'Bootstrap', 'Tailwind CSS']
	},
	{
		category: 'Web Servers',
		items: ['Apache', 'Nginx', 'IIS']
	},
	{
		category: 'CRM',
		items: ['Bitrix', 'Monday', 'Slack']
	},
	{
		category: 'Other',
		items: ['Unix', 'Git', 'Unity3D', 'C#', 'C/C++']
	}
];

export const PROFESSIONAL_EXPERIENCES: ProfessionalExperience[] = [
	{
		company: 'SysWorld Servicios S.A',
		place: 'Remote (Buenos Aires, Argentina)',
		url: 'https://sysworld.lat/',
		role: 'Tech Leader, Full Stack Developer',
		date: 'January 2023 - Present',
		descriptions: [
			'SysWorld is a company specializing in telecommunications, providing legally certified email and SMS campaign services.',
			'After completing high school, I began my career at SysWorld, initially hired as an IT Operator. I was subsequently promoted to Technical Lead, where I oversee both the IT and Development departments while also contributing as a Full Stack Developer.'
		]
	},
	{
		company: 'RoozServers',
		place: 'Remote (Madrid, Spain)',
		url: 'https://roozservers.com/',
		role: 'Network Engineer, Web Developer',
		date: 'February 2019 - August 2021',
		descriptions: [
			'RoozServers was a project of friends dedicated to the sale of dedicated servers for video games and DDoS protection.',
			'I worked on this project throughout high school. I was tasked with developing game server firewalls using eBPF and XDP, as well as working on the main website using Flask for the backend and Bootstrap for the frontend.'
		]
	}
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
	{
		title: 'cuarzo',
		description: 'Cuarzo is a medium-level programming language, aimed at creating x86 software for Linux',
		url: 'https://github.com/alexchwoj/cuarzo',
		technologies: ['Python', 'C', 'Assembly', 'Linux']
	},
	{
		title: 'samp-cookie-exploit',
		description: 'SA-MP authentication process exploit, better known as "server full exploit"',
		url: 'https://github.com/alexchwoj/samp-cookie-exploit',
		technologies: ['Python']
	},
	{
		title: 'hiddenote',
		description: 'A simple encrypted notepad application built with Python and PyQt6.',
		url: 'https://github.com/alexchwoj/hiddenote',
		technologies: ['Python', 'Qt', 'Desktop']
	},
	{
		title: 'pizza-detector',
		description: 'Small CNN model to classify images based on whether they contain a pizza or not.',
		url: 'https://github.com/alexchwoj/pizza-detector',
		technologies: ['Python', 'AI']
	},
	{
		title: 'pawn-easing-functions',
		description: 'Animation system through easing equations.',
		url: 'https://github.com/alexchwoj/pawn-easing-functions',
		technologies: ['Pawn']
	},
	{
		title: 'route-tracing',
		description: 'GPS style route tracing system using path finding.',
		url: 'https://github.com/alexchwoj/route-tracing',
		technologies: ['Pawn']
	},
	{
		title: 'samp-reverse-proxy',
		description: 'Firewall for game servers (San Andreas Multiplayer) that allows the integration of several nodes to the mother server by using the authorization mechanism of the game protocol.',
		url: 'https://github.com/alexchwoj/samp-reverse-proxy',
		technologies: ['Python', 'NGINX']
	},
	{
		title: 'samp-rce-fix',
		description: 'This repository provides a fix for the RCE vulnerability found in previous versions of the SA-MP R5 client.',
		url: 'https://github.com/alexchwoj/samp-rce-fix',
		technologies: ['C++', 'Reverse Engineering']
	}
];

export const EDUCATION: Study[] = [
	{
		school: 'Teclab Higher Technical Institute',
		place: 'Argentina',
		role: 'Senior Cybersecurity Technician',
		date: '2023 - Present'
	}
];

export const LANGUAGES: LanguageSkill[] = [
	{
		language: 'Spanish',
		level: 'Native'
	},
	{
		language: 'English',
		level: 'B2 Upper Intermediate',
		certificationUrl: 'https://cert.efset.org/es/LCCo9j'
	}
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		href: 'https://github.com/alexchwoj',
		src: '/icons/github.svg',
		alt: 'GitHub',
		label: 'GitHub Profile'
	},
	{
		href: 'https://www.linkedin.com/in/alexander-chwojewski/',
		src: '/icons/linkedin.svg',
		alt: 'LinkedIn',
		label: 'LinkedIn Profile'
	}
];

export const NAVIGATION_LINKS = [
	{ href: '/about', text: 'About' },
	{ href: '/experience', text: 'Experience' },
	{ href: '/blog', text: 'Blog' },
	{ href: '/contact', text: 'Contact' }
];
