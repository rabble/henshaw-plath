# Webflow to React Conversion Plan

## Project Overview
Convert the existing Webflow-exported static site (evan.henshaw-plath.com) into a modern React application that can be deployed on Cloudflare Pages.

## Goals
- Maintain exact visual design and functionality
- Improve maintainability and ease of updates
- Enable deployment via Cloudflare Pages
- Create a component-based architecture
- Preserve all SEO and meta tags
- Maintain responsive design

## Technical Stack
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite (fast builds, great DX, CF Pages compatible)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + custom CSS modules for Webflow-specific styles
- **Animation**: Framer Motion (to recreate Webflow interactions)
- **State Management**: Zustand (lightweight, simple)
- **Form Handling**: React Hook Form
- **Icons**: React Icons
- **Image Optimization**: Next/Image component pattern or custom lazy loading
- **Font Loading**: next/font pattern or custom font loader
- **Deployment**: Cloudflare Pages

## Phase 1: Project Setup and Foundation (Week 1)

### 1.1 Initialize Project
- Create new Vite + React + TypeScript project
- Configure Tailwind CSS
- Set up ESLint and Prettier
- Configure path aliases
- Set up Git repository

### 1.2 Asset Migration
- Download all images from Webflow CDN
- Download and set up fonts (IBM Plex Mono, Playfair Display)
- Extract and organize CSS styles
- Create asset optimization pipeline

### 1.3 Core Layout Components
- `Layout` - Main layout wrapper with sidebar structure
- `Navigation` - Responsive navigation with mobile menu
- `Footer` - Site footer
- `Sidebar` - Left and right sidebar components
- `BackToTop` - Progress-based back to top button

### 1.4 Routing Structure
- Set up React Router with all page routes
- Create route configuration file
- Implement navigation active states
- Add 404 page

## Phase 2: Component Library (Week 2)

### 2.1 Typography Components
- `Heading` - H1-H6 with Webflow styles
- `Text` - Paragraph and text variations
- `Link` - Internal and external links
- `RichText` - Component for rendering rich text content

### 2.2 Card Components
- `ProjectCard` - Project preview cards
- `BlogCard` - Blog post preview cards
- `WorkCard` - Work showcase cards
- `TestimonialCard` - Testimonial display

### 2.3 Interactive Components
- `Slider` - Testimonial and image sliders
- `ProgressBar` - Skill progress indicators
- `Timeline` - Experience timeline
- `InstagramFeed` - Instagram integration
- `ContactForm` - Contact form with validation
- `SubscribeForm` - Newsletter subscription

### 2.4 Utility Components
- `SEO` - Meta tags and Open Graph
- `Image` - Lazy loading image component
- `Grid` - Responsive grid layouts
- `Container` - Content container with max-width

## Phase 3: Page Implementation (Week 3)

### 3.1 Static Pages
- Home page with all sections
- About page with skills and timeline
- Contact page with form
- Testimonials page with slider

### 3.2 Dynamic Content Pages
- Projects listing page
- Individual project pages
- Blog listing page
- Individual blog posts
- Works listing page
- Individual work pages

### 3.3 Category/Tag Pages
- Blog categories
- Blog tags
- Project categories
- Work categories

### 3.4 Template Pages
- Style guide
- Licensing information

## Phase 4: Data Management (Week 4)

### 4.1 Content Structure
- Create TypeScript interfaces for all content types
- Set up JSON/Markdown files for static content
- Implement content loading system

### 4.2 Dynamic Features
- Category/tag filtering
- Related content algorithms
- Search functionality (if needed)
- Dynamic navigation generation

### 4.3 Form Integration
- Contact form backend integration
- Newsletter subscription integration
- Form validation and error handling
- Success/error state management

## Phase 5: Animations and Polish (Week 5)

### 5.1 Recreate Webflow Interactions
- Page load animations
- Scroll-triggered animations
- Hover effects
- Transition animations

### 5.2 Performance Optimization
- Image optimization and lazy loading
- Code splitting by route
- Font optimization
- CSS purging

### 5.3 SEO and Accessibility
- Implement all meta tags
- Add structured data
- Ensure proper heading hierarchy
- Add ARIA labels
- Test keyboard navigation

## Phase 6: Testing and Deployment (Week 6)

### 6.1 Testing
- Unit tests for utilities
- Component testing
- Integration testing
- Cross-browser testing
- Mobile responsiveness testing

### 6.2 Build Configuration
- Configure Vite for production
- Set up environment variables
- Configure Cloudflare Pages settings
- Set up CI/CD pipeline

### 6.3 Migration
- Deploy to Cloudflare Pages
- Set up custom domain
- Configure redirects
- Test all functionality
- Monitor performance

## File Structure
```
src/
├── components/
│   ├── common/
│   │   ├── Layout/
│   │   ├── Navigation/
│   │   ├── Footer/
│   │   └── SEO/
│   ├── cards/
│   │   ├── ProjectCard/
│   │   ├── BlogCard/
│   │   └── WorkCard/
│   ├── forms/
│   │   ├── ContactForm/
│   │   └── SubscribeForm/
│   └── interactive/
│       ├── Slider/
│       ├── Timeline/
│       └── InstagramFeed/
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Projects/
│   ├── Blog/
│   └── Contact/
├── hooks/
├── utils/
├── styles/
├── assets/
│   ├── images/
│   └── fonts/
├── data/
│   ├── projects/
│   ├── blog/
│   └── works/
└── types/
```

## Considerations

### Challenges
1. **Webflow-specific CSS**: Many styles are tightly coupled to Webflow's class system
2. **Dynamic CMS content**: Need to decide between static generation or API-based content
3. **Complex interactions**: Some Webflow interactions may be complex to recreate
4. **Asset management**: Large number of images need optimization

### Solutions
1. **CSS Migration**: Create a compatibility layer that maps Webflow classes to new components
2. **Content Management**: Start with JSON/Markdown files, can migrate to headless CMS later
3. **Interactions**: Use Framer Motion with careful animation planning
4. **Assets**: Implement progressive image loading and optimization pipeline

### Future Enhancements
- Add search functionality
- Implement dark mode
- Add content management system
- Enhance performance with ISR/SSG
- Add analytics integration
- Implement A/B testing capabilities

## Success Criteria
- [ ] All pages render identically to original
- [ ] All interactions work as expected
- [ ] Site scores 90+ on Lighthouse
- [ ] Mobile responsive at all breakpoints
- [ ] Forms functional with backend integration
- [ ] SEO maintained or improved
- [ ] Deployment automated via CI/CD
- [ ] Site loads faster than original

## Timeline
- **Total Duration**: 6 weeks
- **Weekly Reviews**: Progress assessment and adjustments
- **Testing**: Continuous throughout development
- **Deployment**: Staged rollout with testing