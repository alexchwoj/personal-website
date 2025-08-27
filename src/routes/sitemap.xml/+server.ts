import { loadBlogPosts } from '$lib/services/blog.js';
import { SITE_CONFIG } from '$lib/constants.js';

export async function GET() {
	const posts = await loadBlogPosts();
	
	const staticPages = [
		'',
		'/about',
		'/blog',
		'/contact',
		'/experience'
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	${staticPages
		.map(
			(page) => `
	<url>
		<loc>${SITE_CONFIG.url}${page}</loc>
		<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`
		)
		.join('')}
	${posts
		.map(
			(post) => `
	<url>
		<loc>${SITE_CONFIG.url}/blog/${post.slug}</loc>
		<lastmod>${new Date(post.publishDate).toISOString().split('T')[0]}</lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.6</priority>
	</url>`
		)
		.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8'
		}
	});
}
