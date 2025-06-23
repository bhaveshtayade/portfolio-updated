# Portfolio Website

## Overview

This is a clean, minimalist portfolio website built with pure HTML, CSS, and JavaScript. The site features a dark theme with bold typography, smooth animations, and fully responsive design. Created as a personal portfolio for Bhavesh Tayade, a Computer Engineering student and MERN Stack Developer.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Fonts**: Inter and JetBrains Mono from Google Fonts

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server bundling

### Database Layer
- **ORM**: Drizzle ORM for type-safe database interactions
- **Database**: PostgreSQL (configured for Neon serverless)
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and active section highlighting
- **Hero Section**: Animated introduction with call-to-action buttons
- **About Section**: Education, experience, and skills showcase
- **Projects Section**: Portfolio projects with technology tags and links
- **Achievements Section**: Timeline of professional milestones
- **Contact Section**: Social links and contact information
- **Animated Background**: Floating geometric shapes for visual appeal

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user schema with authentication preparation
- **Route Registration**: Centralized route management system
- **Development Server**: Vite integration for SSR and HMR

### Development Tools
- **TypeScript**: Full type safety across client and server
- **Path Aliases**: Clean imports with @ prefixes
- **Hot Reload**: Development server with instant updates
- **Error Handling**: Runtime error overlay for development

## Data Flow

### Current State
1. **Static Content**: Portfolio data is currently hardcoded in components
2. **Client-Side Rendering**: React handles all UI interactions
3. **Storage Layer**: Basic user schema exists but is not actively used
4. **API Endpoints**: Backend structure is prepared but routes are minimal

### Prepared for Dynamic Content
1. **Database Schema**: User table with username/password fields
2. **Storage Interface**: CRUD operations ready for implementation
3. **Query Client**: TanStack Query configured for server state
4. **Form Handling**: React Hook Form with Zod validation ready

## External Dependencies

### Core Libraries
- **@radix-ui/***: Comprehensive UI primitive components
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **@neondatabase/serverless**: Neon PostgreSQL driver
- **wouter**: Lightweight React router

### Development Tools
- **drizzle-kit**: Database schema management
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler
- **tailwindcss**: Utility-first CSS framework

### UI Enhancement
- **class-variance-authority**: Component variant management
- **clsx**: Conditional class name utility
- **lucide-react**: Icon library
- **embla-carousel-react**: Carousel component

## Deployment Strategy

### Replit Configuration
- **Environment**: Node.js 20 with PostgreSQL 16
- **Development**: `npm run dev` starts development server on port 5000
- **Production Build**: `npm run build` creates optimized bundles
- **Auto-scaling**: Configured for Replit's autoscale deployment

### Build Process
1. **Client Build**: Vite bundles React application to `dist/public`
2. **Server Build**: esbuild compiles Express server to `dist/index.js`
3. **Static Assets**: Client assets served from Express in production
4. **Database**: Drizzle migrations applied via `npm run db:push`

### Environment Variables
- **DATABASE_URL**: PostgreSQL connection string (required)
- **NODE_ENV**: Environment detection for development/production modes

## Changelog

```
Changelog:
- June 23, 2025. Initial setup
- June 23, 2025. Created standalone HTML/CSS/JavaScript portfolio website with complete functionality and responsive design
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```