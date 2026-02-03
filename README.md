# Online Shopping Frontend

A modern e-commerce web application built with Next.js 15, React 19, and TypeScript. This project provides a complete online shopping experience with user authentication, product browsing, cart management, and order processing.

## 🚀 Features

- **User Authentication**: Secure login and registration system
- **Product Catalog**: Browse and search through products
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Order Management**: Track and manage your orders
- **Admin Panel**: Administrative interface for managing products and orders
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Type Safety**: Full TypeScript support for better development experience

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 20.x or higher
- **npm**: Version 10.x or higher (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Online-shopping-Frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory and add your environment variables:

   ```env
   # Add your environment variables here
   NEXT_PUBLIC_API_URL=your_api_url
   ```

## 🚀 Getting Started

### Development Mode

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

The page will automatically reload when you make changes to the code.

### Production Build

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 📁 Project Structure

```
Online-shopping-Frontend/
├── app/                    # Next.js app directory
│   ├── admin/             # Admin panel pages
│   ├── auth/              # Authentication pages (login, register)
│   ├── cart/              # Shopping cart pages
│   ├── orders/            # Order management pages
│   ├── product/           # Product pages
│   ├── user/              # User profile pages
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── public/                # Static assets
├── Type/                  # TypeScript type definitions
├── .husky/                # Git hooks configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **UI Library**: [React 19](https://react.dev/) - JavaScript library for building user interfaces
- **Language**: [TypeScript 5](https://www.typescriptlang.org/) - Typed superset of JavaScript
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/) - Utility-first CSS framework
- **Code Quality**:
  - [ESLint](https://eslint.org/) - Linting utility
  - [Prettier](https://prettier.io/) - Code formatter
  - [Husky](https://typicode.github.io/husky/) - Git hooks
  - [lint-staged](https://github.com/okonet/lint-staged) - Run linters on staged files

## 🔧 Development Tools

### Code Formatting

This project uses Prettier for code formatting and ESLint for linting. Pre-commit hooks are configured with Husky to automatically format and lint your code before commits.

### Git Hooks

Pre-commit hooks will automatically:

- Format JavaScript, TypeScript, JSON, and Markdown files with Prettier
- Lint and fix JavaScript and TypeScript files with ESLint

## 📝 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm start`       | Start production server  |
| `npm run lint`    | Run ESLint               |
| `npm run prepare` | Install Husky git hooks  |

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Add your environment variables in the Vercel dashboard
5. Deploy!

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

### Other Deployment Options

This Next.js application can also be deployed to:

- **AWS Amplify**
- **Netlify**
- **Railway**
- **Self-hosted** with Node.js

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev/) - Learn React
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn Tailwind CSS

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👤 Author

Ruchith Nusara

## 🐛 Issues

If you encounter any issues or have questions, please file an issue on the project repository.

---

**Note**: This project uses the Next.js App Router (app directory) introduced in Next.js 13+. Make sure to familiarize yourself with the [App Router documentation](https://nextjs.org/docs/app) if you're coming from the Pages Router.
