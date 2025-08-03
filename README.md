# TEST

A modern Next.js application built with TypeScript, featuring internationalization, comprehensive UI components, and data visualization capabilities.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, React 19, and TypeScript
- **Internationalization**: Multi-language support with next-intl
- **UI Components**: Comprehensive component library with Tailwind CSS
- **Charts & Visualization**: Data visualization with Recharts
- **Authentication**: Built-in authentication system with route groups
- **Type Safety**: Full TypeScript support with strict type checking
- **Code Quality**: ESLint, Prettier, and Husky for code consistency
- **Performance**: Turbopack for faster development builds
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📁 Project Structure

```
aiagent/
├── node_modules/           # Dependencies
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── logo.png
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── [locale]/       # Internationalized routes
│   │   │   ├── (authentication)/  # Auth-protected routes
│   │   │   └── (public)/          # Public routes
│   │   └── fonts/
│   │       ├── globals.css
│   │       ├── layout.tsx
│   │       └── not-found.tsx
│   ├── assets/             # Application assets
│   ├── components/         # Reusable UI components
│   ├── container/          # Container components
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization config
│   ├── interfaces/         # TypeScript interfaces
│   ├── lib/                # Utility libraries
│   ├── messages/           # Translation files
│   └── middleware.ts       # Next.js middleware
├── .eslintrc              # ESLint configuration
├── .gitignore            # Git ignore rules
├── .prettierrc           # Prettier configuration
├── components.json       # Component configuration
├── env.d.ts             # Environment type definitions
└── package.json         # Project dependencies
```

## 🛠️ Tech Stack

### Core Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Runtime**: React 19
- **Styling**: Tailwind CSS 3.4 with animations

### UI & Components

- **Class Management**: clsx, tailwind-merge
- **Animations**: tailwindcss-animate
- **Charts**: Recharts 3.1
- **Component System**: Custom component library

### Development Tools

- **Package Manager**: Yarn
- **Build Tool**: Turbopack (development)
- **Linting**: ESLint 8 with TypeScript support
- **Formatting**: Prettier 3.4 with plugins
- **Pre-commit**: Husky 9.1 with lint-staged
- **CSS Processing**: PostCSS with Autoprefixer

### Utilities

- **Internationalization**: next-intl 4.0
- **Cookie Management**: cookies-next 5.0

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd aiagent
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Run the development server**

   ```bash
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Script             | Description                              |
| ------------------ | ---------------------------------------- |
| `yarn dev`         | Start development server with Turbopack  |
| `yarn build`       | Build the application for production     |
| `yarn start`       | Start the production server              |
| `yarn lint`        | Run ESLint fixes and Prettier formatting |
| `yarn lint:fix`    | Fix ESLint issues automatically          |
| `yarn lint:format` | Format code with Prettier                |

## 🌍 Internationalization

The project supports multiple languages using next-intl:

### Structure

- **Route-based**: `[locale]` dynamic segments for language routing
- **Messages**: Translation files in `src/messages/`
- **Middleware**: Automatic locale detection and redirection
- **Configuration**: Centralized i18n setup in `src/i18n/`

### Adding a New Language

1. **Create message file**

   ```bash
   # Create src/messages/[locale].json
   touch src/messages/es.json
   ```

2. **Add translations**

   ```json
   {
     "common": {
       "welcome": "Bienvenido",
       "login": "Iniciar sesión"
     }
   }
   ```

3. **Update configuration**
   ```typescript
   // Update src/i18n/config.ts
   export const locales = ["en", "es"] as const;
   ```

## 🎨 Styling & Components

### Tailwind CSS Setup

- **Base styles**: `src/app/fonts/globals.css`
- **Animations**: tailwindcss-animate for smooth transitions
- **Utilities**: tailwind-merge for conditional classes
- **Class handling**: clsx for dynamic class composition

### Component Architecture

```typescript
// Example component structure
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Component({ variant = 'primary', size = 'md', className }: ComponentProps) {
  return (
    <div className={twMerge(
      clsx(
        'base-styles',
        {
          'variant-primary': variant === 'primary',
          'variant-secondary': variant === 'secondary',
          'size-sm': size === 'sm',
          'size-md': size === 'md',
          'size-lg': size === 'lg',
        },
        className
      )
    )}>
      Content
    </div>
  );
}
```

## 🔐 Authentication & Routing

### Route Groups

- **`(authentication)`**: Protected routes requiring login

  - Login, register, dashboard pages
  - Automatic redirection for unauthenticated users

- **`(public)`**: Publicly accessible routes
  - Landing page, about, contact
  - No authentication required

### Middleware Implementation

```typescript
// src/middleware.ts handles:
// - Locale detection and routing
// - Authentication checks
// - Route protection
```

## 📊 Data Visualization

### Recharts Integration

```typescript
import { LineChart, BarChart, PieChart, Line, Bar, XAxis, YAxis } from 'recharts';

// Example usage
<LineChart width={400} height={300} data={data}>
  <Line type="monotone" dataKey="value" stroke="#8884d8" />
  <XAxis dataKey="name" />
  <YAxis />
</LineChart>
```

### Chart Types Available

- Line Charts
- Bar Charts
- Area Charts
- Pie Charts
- Scatter Plots
- Composed Charts

## 🔧 Configuration

### ESLint Configuration

```javascript
// .eslintrc
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

### Prettier Configuration

```javascript
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "plugins": [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ]
}
```

### TypeScript Configuration

- Strict mode enabled
- Path mapping for imports
- Type checking in pre-commit hooks
- Interface definitions in `src/interfaces/`

## 🚀 Build & Deployment

### Production Build

```bash
# Build the application
yarn build

# Start production server
yarn start
```

### Environment Variables

```env
# Required environment variables
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://api.your-domain.com

# Optional
NEXT_PUBLIC_ANALYTICS_ID=
DATABASE_URL=
```

### Deployment Checklist

- [ ] Environment variables configured
- [ ] Build completes without errors
- [ ] All tests passing
- [ ] Linting passes
- [ ] TypeScript compilation successful

## 🔍 Development Guidelines

### Code Organization

- **Components**: Reusable UI components in `src/components/`
- **Containers**: Page-specific components in `src/container/`
- **Hooks**: Custom React hooks in `src/hooks/`
- **Utilities**: Helper functions in `src/lib/`
- **Types**: TypeScript interfaces in `src/interfaces/`

### Naming Conventions

- **Files**: kebab-case for files (`user-profile.tsx`)
- **Components**: PascalCase for components (`UserProfile`)
- **Functions**: camelCase for functions (`getUserData`)
- **Constants**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Git Workflow

1. **Feature branches**: `feature/your-feature-name`
2. **Commit messages**: Conventional commits format
3. **Pre-commit hooks**: Automatic linting and formatting
4. **Type checking**: Enforced before commits

## 🧪 Quality Assurance

### Pre-commit Hooks

```json
{
  "*.{js,jsx,ts,tsx}": ["yarn lint:fix", "yarn lint:format"],
  "*.{ts,tsx}": ["bash -c tsc --noEmit"]
}
```

### Code Quality Standards

- ESLint rules enforcement
- Prettier code formatting
- TypeScript strict mode
- Import sorting and organization
- Consistent component patterns

## 🐛 Troubleshooting

### Common Issues

**Build Errors**

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules yarn.lock
yarn install
```

**TypeScript Errors**

```bash
# Check types without emitting
yarn tsc --noEmit

# Update type definitions
yarn add -D @types/node@latest @types/react@latest
```

**Linting Issues**

```bash
# Fix automatically
yarn lint

# Check specific files
yarn eslint src/**/*.tsx --fix
```

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and linting (`yarn lint`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
