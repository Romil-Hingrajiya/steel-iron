# Steel - LPG & Gas Equipment Solutions

A modern, responsive Next.js website for Steel, a leading provider of LPG and gas equipment solutions. Built with cutting-edge technologies and optimized for performance, accessibility, and user experience.

## 🚀 Live Demo

[Website URL - To be deployed]

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Component Architecture](#component-architecture)
- [Routing Structure](#routing-structure)
- [State Management](#state-management)
- [Performance Optimizations](#performance-optimizations)
- [SEO & Accessibility](#seo--accessibility)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

Steel is a comprehensive LPG and gas equipment solutions provider. This website serves as the digital frontend, showcasing our products, services, and expertise in the gas industry. The platform features a modern, professional design with intuitive navigation and comprehensive product information.

### Key Business Segments
- **LPG Products**: Pressure relief valves, service valves, multi valves
- **CNG Solutions**: Compressed natural gas equipment
- **Other Products**: Specialized gas equipment and accessories
- **Certifications**: Industry compliance and quality assurance
- **Contact & Support**: Customer service and technical assistance

## 🏗️ Architecture

### High-Level Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Client Side   │    │   Next.js App   │    │   Static Assets │
│                 │    │                 │    │                 │
│ • React         │◄──►│ • App Router    │◄──►│ • Images        │
│ • TypeScript    │    │ • Server Side   │    │ • Icons         │
│ • Tailwind CSS  │    │ • Static Gen    │    │ • Documents     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### Application Flow
```
1. User Navigation
   ├── Homepage (/) - Company overview & hero section
   ├── About (/about) - Company information & history
   ├── Products (/products) - Main products page
   │   ├── LPG (/products/lpg) - LPG product listings
   │   │   ├── Internal Pressure Relief Valves
   │   │   ├── External Pressure Relief Valves
   │   │   ├── Multi Valves
   │   │   ├── Service Valves (Liquid)
   │   │   └── Service Valves (Vapour)
   │   ├── CNG (/products/cng) - CNG solutions
   │   └── Other (/products/other) - Specialized equipment
   ├── Certificates (/certificates) - Compliance documents
   ├── Contact (/contact) - Contact form & information
   └── Legal Pages - Privacy, Terms, Cookie Policy
```

## ✨ Features

### Core Features
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Dynamic Product Pages**: Individual product detail pages with image galleries
- **Interactive Components**: Modal lightboxes, accordions, forms
- **SEO Optimized**: Meta tags, structured data, semantic HTML
- **Performance Optimized**: Image optimization, code splitting, lazy loading
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation

### Advanced Features
- **Image Gallery System**: Full-screen modals with navigation
- **Pagination**: Client-side pagination for certificate images
- **Form Validation**: Real-time validation with error handling
- **Keyboard Navigation**: ESC key, arrow keys for modals
- **CTA Integration**: Reusable call-to-action sections
- **FAQ System**: Accordion-style frequently asked questions

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router
- **React 18**: Latest React features and hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PostCSS**: CSS processing and optimization
- **Node.js**: Runtime environment

### Performance & Optimization
- **Next.js Image**: Automatic image optimization
- **Static Generation**: Pre-rendered pages for performance
- **Code Splitting**: Automatic bundle optimization

## 📁 Project Structure

```
Steel/
├── public/                          # Static assets
│   ├── products/                    # Product images
│   ├── certificates/                # Certificate documents
│   ├── CTA-bg.jpg                  # CTA background
│   └── [other assets]
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Global styles
│   │   ├── about/                  # About page
│   │   ├── certificates/           # Certificates page
│   │   ├── contact/                # Contact page
│   │   ├── products/               # Products section
│   │   │   ├── page.tsx            # Main products page
│   │   │   ├── lpg/                # LPG products
│   │   │   │   ├── page.tsx        # LPG listing
│   │   │   │   └── [product-id]/   # Individual products
│   │   │   ├── cng/                # CNG products
│   │   │   └── other/              # Other products
│   │   └── [legal pages]/          # Privacy, Terms, etc.
│   ├── components/                 # Reusable components
│   │   ├── ui/                     # UI components
│   │   │   ├── Button.tsx          # Button component
│   │   │   ├── Heading.tsx         # Heading component
│   │   │   └── FAQAccordion.tsx    # FAQ accordion
│   │   ├── layout/                 # Layout components
│   │   │   ├── Navbar.tsx          # Navigation bar
│   │   │   └── Footer.tsx          # Footer component
│   │   ├── sections/               # Page sections
│   │   │   ├── HeroSection.tsx     # Hero sections
│   │   │   ├── CTASection.tsx      # Call-to-action
│   │   │   └── [other sections]    # Other page sections
│   │   └── forms/                  # Form components
│   │       └── ContactForm.tsx     # Contact form
│   └── [other directories]
├── package.json                     # Dependencies
├── next.config.ts                   # Next.js configuration
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd Steel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔄 Development Workflow

### Code Organization Principles
- **Component-Based Architecture**: Reusable, modular components
- **Type Safety**: Full TypeScript implementation
- **Consistent Styling**: Tailwind CSS utility classes
- **Performance First**: Optimized images and code splitting

### Development Guidelines
1. **Component Structure**: One component per file
2. **Naming Conventions**: PascalCase for components, camelCase for functions
3. **File Organization**: Group related components in directories
4. **State Management**: Use React hooks for local state
5. **Error Handling**: Implement proper error boundaries

### Code Quality
- **ESLint**: Enforce code style and catch errors
- **TypeScript**: Type safety and better IDE support
- **Prettier**: Consistent code formatting
- **Component Testing**: Unit tests for critical components

## 🧩 Component Architecture

### Core Components

#### Layout Components
- **Navbar**: Responsive navigation with dropdown menus
- **Footer**: Site footer with links and information
- **Layout**: Root layout with metadata and global styles

#### UI Components
- **Button**: Reusable button with variants (primary, secondary)
- **Heading**: Semantic heading component with levels
- **FAQAccordion**: Expandable FAQ section
- **Image Gallery**: Modal-based image viewer

#### Section Components
- **HeroSection**: Page hero with gradient backgrounds
- **CTASection**: Call-to-action with background image
- **ProductGrid**: Product listing with cards
- **ContactSection**: Contact form and information

### Component Communication
```
Parent Component
├── Props Down: Data and callbacks
├── Events Up: User interactions
└── State Management: Local component state
```

## 🛣️ Routing Structure

### App Router Implementation
```
/                           # Homepage
├── about/                  # About page
├── certificates/           # Certificates gallery
├── contact/                # Contact form
├── products/               # Products section
│   ├── lpg/               # LPG products
│   │   ├── internal-pressure-relief-valves/
│   │   ├── external-pressure-relief-valves/
│   │   ├── multi-valves/
│   │   ├── service-valves-liquid/
│   │   └── service-valves-vapour/
│   ├── cng/               # CNG products
│   └── other/             # Other products
└── [legal pages]/         # Privacy, Terms, etc.
```

### Dynamic Routes
- **Product Pages**: `/products/lpg/[product-id]`
- **Image Galleries**: Dynamic image loading from public directory
- **Modal Navigation**: Client-side routing for image modals

## 📊 State Management

### Local State (React Hooks)
- **useState**: Component-level state management
- **useEffect**: Side effects and lifecycle management
- **Custom Hooks**: Reusable state logic

### State Patterns
```typescript
// Modal State Management
const [isModalOpen, setIsModalOpen] = useState(false);
const [currentImageIndex, setCurrentImageIndex] = useState(0);

// Form State Management
const [formData, setFormData] = useState<FormData>({});
const [errors, setErrors] = useState<FormErrors>({});

// Pagination State
const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 10;
```

## ⚡ Performance Optimizations

### Image Optimization
- **Next.js Image Component**: Automatic optimization
- **WebP Format**: Modern image format for smaller sizes
- **Responsive Images**: Different sizes for different devices
- **Lazy Loading**: Images load as needed

### Code Optimization
- **Code Splitting**: Automatic bundle splitting
- **Tree Shaking**: Remove unused code
- **Minification**: Compressed production builds
- **Caching**: Browser and CDN caching strategies

### Performance Metrics
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **First Input Delay (FID)**: < 100ms

## 🔍 SEO & Accessibility

### SEO Implementation
- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper heading hierarchy
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine directives

### Accessibility Features
- **WCAG 2.1 AA Compliance**: Accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: ARIA labels and roles
- **Color Contrast**: WCAG compliant color ratios
- **Focus Management**: Proper focus indicators

### Accessibility Checklist
- [x] Semantic HTML structure
- [x] ARIA labels and roles
- [x] Keyboard navigation support
- [x] Color contrast compliance
- [x] Screen reader compatibility
- [x] Focus management
- [x] Alt text for images

## 🚀 Deployment

### Production Build
```bash
# Build the application
npm run build

# Analyze bundle size
npm run analyze

# Start production server
npm start
```

### Deployment Options
1. **Vercel**: Recommended for Next.js applications
2. **Netlify**: Static site hosting
3. **AWS Amplify**: Cloud hosting solution
4. **Docker**: Containerized deployment

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

### Performance Monitoring
- **Core Web Vitals**: Monitor performance metrics
- **Error Tracking**: Implement error monitoring
- **Analytics**: User behavior tracking
- **Uptime Monitoring**: Service availability

## 🤝 Contributing

### Development Process
1. **Fork the repository**
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes**: Follow coding standards
4. **Test thoroughly**: Ensure all features work
5. **Commit changes**: Use conventional commit messages
6. **Push to branch**: `git push origin feature/amazing-feature`
7. **Create Pull Request**: Detailed description of changes

### Code Standards
- **TypeScript**: Strict type checking
- **ESLint**: Code quality enforcement
- **Prettier**: Consistent formatting
- **Conventional Commits**: Standard commit messages

### Testing Strategy
- **Unit Tests**: Component testing
- **Integration Tests**: Page functionality
- **E2E Tests**: User journey testing
- **Performance Tests**: Load time optimization

## 📄 License

This project is proprietary software owned by Steel. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: [support@steel.com]
- **Phone**: [phone-number]
- **Documentation**: [docs-url]

---

**Built with ❤️ by the Steel Development Team**

*Last updated: December 2024*
