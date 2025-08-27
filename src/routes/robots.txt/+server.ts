import { SITE_CONFIG } from '$lib/constants.js';

export async function GET() {
	const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_CONFIG.url}/sitemap.xml`;

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8'
		}
	});
}
