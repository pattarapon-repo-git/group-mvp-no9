# Group Project MVP - Sprint 2

This is the MVP (Minimum Viable Product) for the E-commerce & Custom Ordering platform, built during Sprint 2.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Linting:** [ESLint](https://eslint.org/) (Flat Config)

## 📦 Features

- **Home & Product Presentation:** `HomePage`, `HeroBanner`, `ProductGrid`, `ImageMarquee`
- **Shopping & Checkout:** `ProductsPage`, `CheckoutPage`
- **Custom Ordering System:** `CustomOrderPage`, `CustomOrderModal`, `CustomOrderCTA`
- **Authentication:** `SignInPage`, `SignUpPage`

## 🛠️ Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 1. Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```

### 2. Run Development Server
Start the Vite development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### 3. Lint the Code
Check for syntax errors or unused variables using ESLint:
```bash
npm run lint
```

### 4. Build for Production
Bundle the application for production:
```bash
npm run build
```
You can preview the built production app locally using:
```bash
npm run preview
```

## 📝 Configuration Updates
- We have fully migrated from `oxlint` to **ESLint**. The configuration can be found in `eslint.config.js`.
