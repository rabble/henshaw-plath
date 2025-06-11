# Evan Henshaw-Plath Portfolio Site

A modern React-based portfolio website built with Vite, TypeScript, and Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Building for Production

```bash
npm run build
```

## Deployment to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. Push this code to a GitHub repository
2. Go to Cloudflare Pages dashboard
3. Create a new project and connect your GitHub repository
4. Use these build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `evan-site`

### Option 2: Direct Upload

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Deploy using Wrangler CLI:
   ```bash
   npm install -g wrangler
   wrangler pages deploy dist
   ```

### Option 3: Drag and Drop

1. Build the project locally:
   ```bash
   npm run build
   ```

2. Go to Cloudflare Pages dashboard
3. Create a new project
4. Drag and drop the `dist` folder

## Features

- ✅ Responsive design with mobile support
- ✅ Dynamic routing with React Router
- ✅ Animated transitions with Framer Motion
- ✅ Type-safe with TypeScript
- ✅ Fast builds with Vite
- ✅ Styled with Tailwind CSS
- ✅ SEO-friendly
- ✅ Cloudflare Pages optimized

## Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components
├── data/            # Static data
├── assets/          # Images and fonts
└── styles/          # Global styles
```

## Next Steps

1. Replace placeholder images with actual project images
2. Update project and blog content with real data
3. Implement contact form functionality
4. Add Google Analytics or other analytics
5. Set up custom domain in Cloudflare Pages