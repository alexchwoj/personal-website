import { loadBlogPosts } from '$lib/services/blog.js';
import { sortPostsByDate } from '$lib/utils/blog.js';
import { SITE_CONFIG } from '$lib/constants.js';

export async function GET() {
	const posts = await loadBlogPosts();
	const sortedPosts = sortPostsByDate(posts);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${SITE_CONFIG.author} - Blog</title>
		<description>Blog posts about software development, technology, and programming insights</description>
		<link>${SITE_CONFIG.url}/blog</link>
		<atom:link href="${SITE_CONFIG.url}/blog/rss.xml" rel="self" type="application/rss+xml"/>
		<language>en</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		<generator>SvelteKit</generator>
		${sortedPosts
			.map(
				(post) => `
		<item>
			<title><![CDATA[${post.title}]]></title>
			<description><![CDATA[${post.description}]]></description>
			<link>${SITE_CONFIG.url}/blog/${post.slug}</link>
			<guid isPermaLink="true">${SITE_CONFIG.url}/blog/${post.slug}</guid>
			<pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
			<author>${post.author}</author>
			${post.categories.map(cat => `<category>${cat}</category>`).join('')}
		</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8'
		}
	});
}
