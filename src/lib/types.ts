export interface TechnologyCategory {
	category: string;
	items: string[];
}

export interface ProfessionalExperience {
	company: string;
	place: string;
	url?: string;
	role: string;
	date: string;
	descriptions: string[];
}

export interface PersonalProject {
	title: string;
	description: string;
	url: string;
	technologies: string[];
}

export interface Study {
	school: string;
	place: string;
	role: string;
	date: string;
}

export interface LanguageSkill {
	language: string;
	level: string;
	certificationUrl?: string;
}

export interface SocialLink {
	href: string;
	src: string;
	alt: string;
	label: string;
}
