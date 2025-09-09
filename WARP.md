# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a React-based landing page project built with Vite, TypeScript, and Tailwind CSS for "Argus PPC" - a white-label paid media service for marketing agencies. The project uses shadcn/ui components and follows a modern frontend architecture pattern.

## Development Commands

### Core Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Component Development
- Components use shadcn/ui CLI: `npx shadcn-ui@latest add [component-name]`
- UI components are in `src/components/ui/`
- Custom components are in `src/components/`

## Architecture

### Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack Query for server state
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod validation

### Project Structure
```
src/
├── components/           # Landing page sections
│   ├── ui/              # shadcn/ui components
│   ├── HeroSection.tsx  # Main hero section
│   ├── Navbar.tsx       # Navigation component
│   └── ...              # Other landing page sections
├── pages/               # Route components
├── lib/                 # Utility functions
├── hooks/               # Custom React hooks
└── assets/              # Static assets
```

### Design System
- **Colors**: HSL-based design tokens in CSS variables
- **Theme**: Dark theme with purple accent (#8B5CF6)
- **Typography**: Raleway font family
- **Components**: All styled with Tailwind + custom CSS variables

### Key Patterns
1. **Component Architecture**: Single-page application with section-based components for the landing page
2. **Styling**: Uses CSS variables for theming with Tailwind utilities
3. **Path Aliases**: `@/` maps to `src/` directory
4. **State Management**: TanStack Query for any API calls, local state with React hooks

### Configuration Files
- `vite.config.ts` - Vite configuration with path aliases and React SWC
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Tailwind configuration with custom design tokens
- `eslint.config.js` - ESLint configuration with React and TypeScript rules
- `tsconfig.json` - TypeScript configuration with relaxed rules for rapid development

### Landing Page Structure
The main page (`src/pages/Index.tsx`) renders these sections in order:
1. Navbar (fixed)
2. HeroSection
3. ValueSection
4. HowItWorksSection
5. PackagesSection
6. TargetAudienceSection
7. BenefitsSection
8. TestimonialsSection
9. FinalCTASection

### Custom Button Variants
The Button component includes custom variants:
- `cta` - Gradient button with glow effect
- `hero` - Larger CTA button for hero section
- `outline-white` - Transparent button with white border

### Development Notes
- Server runs on port 8080 (configured in vite.config.ts)
- Uses Lovable integration with component tagging in development mode
- ESLint configured to allow unused variables/parameters for rapid prototyping
- TypeScript configured with relaxed rules (noImplicitAny: false, strictNullChecks: false)

### External Integration
- Calendly integration for CTA buttons
- Asset uploads handled through Lovable platform
- Deployment configured for Lovable hosting platform
