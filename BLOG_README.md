# SvelteKit Blog System

A complete static blog system built with SvelteKit and TailwindCSS featuring:

## Features

### ✅ Core Features

- **Static Markdown Content**: All blog posts are written in Markdown with frontmatter
- **Full-text Search**: Client-side search powered by Fuse.js
- **Categories & Tags**: Organize posts with categories and tags
- **Multilingual Support**: Posts in English and Spanish with language filtering
- **Responsive Design**: Mobile-first responsive layout
- **Cover Images**: Support for post cover images
- **Reading Time**: Automatic reading time calculation
- **SEO Optimized**: Meta tags, Open Graph, structured data (JSON-LD)

### 🎨 UI Components

- **BlogCard**: Displays post preview with metadata
- **BlogSearch**: Real-time search with fuzzy matching
- **CategoryFilter**: Filter posts by category
- **LanguageFilter**: Filter posts by language
- **BlogStats**: Display blog statistics
- **RelatedPosts**: Show related content based on categories/tags
- **Breadcrumb**: Navigation breadcrumbs

### 📄 Pages

- `/blog` - Main blog listing with search and filters
- `/blog/[slug]` - Individual blog post
- `/blog/category/[category]` - Posts filtered by category
- `/blog/archive` - Posts organized by year
- `/blog/rss.xml` - RSS feed
- `/sitemap.xml` - XML sitemap
- `/robots.txt` - Robots.txt

## Content Structure

Blog posts are stored in `/src/content/blog/` as Markdown files with frontmatter:

```markdown
---
title: 'Post Title'
description: 'Post description for SEO and previews'
publishDate: '2024-01-15'
categories: ['Web Development', 'Frontend']
tags: ['svelte', 'sveltekit', 'javascript']
author: 'Author Name'
language: 'en'
coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq3joaHJkCS8gftpCUUR3Yg63O6kFWSO7fg&s'
---

# Your Content Here

Markdown content with full formatting support.
```

### Required Frontmatter Fields

- `title`: Post title
- `description`: SEO description and preview text
- `publishDate`: Publication date (YYYY-MM-DD format)
- `categories`: Array of category strings
- `tags`: Array of tag strings
- `author`: Author name
- `language`: "en" or "es"

### Optional Frontmatter Fields

- `coverImage`: Path to cover image (relative to static folder)

## Search Functionality

The search system indexes:

- Post titles (weight: 2)
- Descriptions (weight: 1.5)
- Categories (weight: 1.2)
- Tags (weight: 1)
- Author names (weight: 0.8)

Search is fuzzy with a 0.3 threshold for typo tolerance.

## Related Posts Algorithm

Related posts are calculated by scoring:

- Same language: +10 points
- Shared categories: +5 points per category
- Shared tags: +2 points per tag
- Same author: +3 points

## SEO Features

### Meta Tags

- Title, description, canonical URL
- Open Graph for social sharing
- Twitter Card support

### Structured Data (JSON-LD)

- BlogPosting schema for individual posts
- Blog schema for listing pages
- Rich snippets for search engines

### Performance

- Static site generation (SSG)
- Optimized images
- Minimal JavaScript bundle
- Fast client-side navigation

## Development

### Adding New Posts

1. Create a new `.md` file in `/src/content/blog/`
2. Add required frontmatter
3. Write content in Markdown
4. Posts are automatically indexed on build

### Customization

- Modify search weights in `/src/lib/services/search.ts`
- Update styling in component files
- Add new metadata fields in type definitions
- Customize related posts algorithm in `RelatedPosts.svelte`

### Build & Deploy

```bash
npm run build
npm run preview
```

The blog system is fully static and can be deployed to any static hosting service.

## Dependencies

### Core

- **SvelteKit**: Web framework
- **TailwindCSS**: Styling
- **TypeScript**: Type safety

### Blog-specific

- **gray-matter**: Frontmatter parsing
- **marked**: Markdown to HTML conversion
- **fuse.js**: Client-side search
- **lucide-svelte**: Icons

All content is processed at build time for optimal performance.
