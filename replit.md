# Portfolio Website - Full Stack Application

## Overview

This is a modern full-stack portfolio website built with React and Express.js, showcasing a personal portfolio with professional experience, projects, and contact information. The application features a sleek, responsive design using shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client-side and server-side code:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Development**: In-memory storage fallback for local development

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation with scroll effects and mobile responsiveness
- **Hero Section**: Landing page with gradient background and social links
- **About Section**: Personal information with statistics cards
- **Skills Section**: Technical skills organized by categories with progress bars
- **Projects Section**: Featured projects with technology tags and descriptions
- **Experience Section**: Timeline-based work experience display
- **Contact Section**: Contact form with multiple contact methods
- **Footer**: Social links and contact information

### Backend Components
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations
- **Route Registration**: Centralized route management system
- **Error Handling**: Global error handling middleware
- **Logging**: Request/response logging with performance metrics

### UI Components
- Complete shadcn/ui component library including:
  - Form components (Input, Textarea, Button, Checkbox, etc.)
  - Layout components (Card, Dialog, Sheet, Tabs, etc.)
  - Navigation components (Dropdown, Context Menu, Breadcrumb, etc.)
  - Feedback components (Toast, Alert, Progress, etc.)

## Data Flow

### Client-Side Data Flow
1. **Component Rendering**: React components render with TypeScript type safety
2. **State Management**: TanStack Query manages server state and caching
3. **API Communication**: RESTful API calls with error handling and retries
4. **UI Updates**: Reactive updates based on state changes

### Server-Side Data Flow
1. **Request Processing**: Express middleware handles incoming requests
2. **Route Handling**: Centralized route registration with type-safe handlers
3. **Data Storage**: Abstracted storage layer with pluggable implementations
4. **Response Formation**: JSON responses with proper error handling

### Database Schema
- **Users Table**: Basic user entity with username and password fields
- **Validation**: Zod schemas for runtime type validation
- **Migrations**: Drizzle-managed database migrations

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS processing
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Utilities**: clsx and class-variance-authority for conditional styling

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build Tools**: Vite for frontend, esbuild for backend
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied by modern setup)
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles server code for production
3. **Asset Optimization**: Automatic code splitting and optimization
4. **Type Checking**: TypeScript compilation verification

### Production Configuration
- **Environment Variables**: DATABASE_URL for database connection
- **Static Serving**: Express serves built frontend assets
- **Process Management**: NODE_ENV-based configuration
- **Database**: PostgreSQL with connection pooling via Neon

### Development Setup
- **Hot Reload**: Vite HMR for frontend development
- **Server Restart**: tsx for backend TypeScript execution
- **Database**: Drizzle push for schema synchronization
- **CORS**: Development-friendly CORS configuration

### Replit Integration
- **Runtime Error Handling**: @replit/vite-plugin-runtime-error-modal
- **Development Banner**: Replit development environment detection
- **Cartographer**: Code navigation and debugging support