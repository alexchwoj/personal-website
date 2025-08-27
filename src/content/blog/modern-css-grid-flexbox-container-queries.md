---
title: 'Modern CSS: Grid, Flexbox, and Container Queries'
description: 'Master modern CSS layout techniques with CSS Grid, Flexbox, and the new Container Queries. Build responsive layouts that adapt to any screen size.'
publishDate: '2024-02-01'
categories: ['Frontend', 'CSS']
tags: ['css', 'grid', 'flexbox', 'responsive', 'web-design']
author: 'Alexander Chwojewski'
language: 'en'
coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuq3joaHJkCS8gftpCUUR3Yg63O6kFWSO7fg&s'
---

# Modern CSS: Grid, Flexbox, and Container Queries

CSS has evolved tremendously in recent years. Modern layout techniques like CSS Grid, Flexbox, and Container Queries have revolutionized how we build responsive web interfaces.

## CSS Grid: The Ultimate Layout System

CSS Grid is a two-dimensional layout system that excels at creating complex layouts:

```css
.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	grid-gap: 2rem;
	padding: 2rem;
}

.grid-item {
	background: #f0f0f0;
	padding: 1rem;
	border-radius: 8px;
}
```

### Grid Areas

Define layout areas for semantic positioning:

```css
.layout {
	display: grid;
	grid-template-areas:
		'header header header'
		'sidebar main main'
		'footer footer footer';
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}

.header {
	grid-area: header;
}
.sidebar {
	grid-area: sidebar;
}
.main {
	grid-area: main;
}
.footer {
	grid-area: footer;
}
```

## Flexbox: One-Dimensional Layouts

Flexbox excels at distributing space and aligning items in a single dimension:

```css
.flex-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
}

.flex-item {
	flex: 1;
	min-width: 0; /* Important for text truncation */
}
```

### Common Flexbox Patterns

**Centering content:**

```css
.center {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
```

**Equal height cards:**

```css
.card-container {
	display: flex;
	gap: 1rem;
}

.card {
	flex: 1;
	display: flex;
	flex-direction: column;
}

.card-content {
	flex: 1;
}
```

## Container Queries: The Future of Responsive Design

Container Queries allow components to respond to their container's size rather than the viewport:

```css
.card-container {
	container-type: inline-size;
	container-name: card;
}

@container card (min-width: 400px) {
	.card {
		display: flex;
		gap: 1rem;
	}

	.card-image {
		flex: 0 0 200px;
	}

	.card-content {
		flex: 1;
	}
}
```

## Combining Layout Methods

The real power comes from combining these techniques:

```css
/* Main layout with Grid */
.app-layout {
	display: grid;
	grid-template-areas:
		'header'
		'main'
		'footer';
	grid-template-rows: auto 1fr auto;
	min-height: 100vh;
}

/* Content area with Flexbox */
.content {
	display: flex;
	gap: 2rem;
	padding: 2rem;
}

/* Card grid with auto-fit */
.card-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: 1.5rem;
}

/* Individual cards with Flexbox */
.card {
	display: flex;
	flex-direction: column;
	background: white;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-content {
	flex: 1;
	padding: 1.5rem;
}
```

## Best Practices

### Choose the Right Tool

- **Grid**: Two-dimensional layouts, page structure
- **Flexbox**: One-dimensional layouts, component alignment
- **Container Queries**: Component-based responsive design

### Performance Considerations

- Use `contain: layout style` for better performance
- Avoid deep nesting of flex/grid containers
- Test on various devices and screen sizes

### Accessibility

- Maintain logical source order
- Use semantic HTML elements
- Test with screen readers
- Ensure sufficient color contrast

## Browser Support

Modern CSS features have excellent support:

- **CSS Grid**: 96%+ browser support
- **Flexbox**: 98%+ browser support
- **Container Queries**: 90%+ support (use `@supports` for fallbacks)

```css
/* Progressive enhancement */
.layout {
	/* Flexbox fallback */
	display: flex;
	flex-wrap: wrap;
}

@supports (display: grid) {
	.layout {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
}
```

## Conclusion

Modern CSS gives us powerful tools for creating flexible, maintainable layouts. By mastering Grid, Flexbox, and Container Queries, you can build interfaces that adapt beautifully to any context.

The key is understanding when to use each technique and how they complement each other in creating robust, responsive designs.
