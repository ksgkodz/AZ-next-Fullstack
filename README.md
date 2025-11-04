# 🛍️ Next.js E-Commerce Store

A modern, full-stack e-commerce platform built with Next.js 15, featuring multi-language support, multiple payment gateways, and a powerful admin dashboard.

## ✨ Features

### 🎨 User Experience
- 🌍 **Multi-language Support** - English, French, and Arabic (RTL)
- 🌓 **Dark Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Optimized for all devices
- 🔍 **Advanced Search** - Find products quickly
- 📜 **Browsing History** - Track viewed products
- 🖼️ **Image Zoom** - Enhanced product viewing

### 🛒 Shopping Features
- 🛍️ **Shopping Cart** - Real-time cart management
- 💳 **Multiple Payment Methods** - Stripe & PayPal integration
- 📦 **Order Tracking** - Complete order history
- 👤 **User Accounts** - Profile and address management
- ✉️ **Email Notifications** - Order confirmations and updates

### 🔐 Security & Auth
- 🔒 **NextAuth** - Secure authentication system
- 🗄️ **MongoDB** - Reliable database with Mongoose ODM
- 🛡️ **Protected Routes** - Role-based access control
- 🔑 **Password Encryption** - bcrypt hashing

### ⚙️ Admin Dashboard
- 📊 **Analytics Overview** - Sales and performance metrics
- 📦 **Product Management** - CRUD operations with rich editor
- 👥 **User Management** - Customer administration
- 🧾 **Order Management** - Process and track orders
- 🌐 **Web Pages** - Dynamic content management
- ⚙️ **Settings** - Store configuration

## 🚀 Tech Stack

### Core
- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** Radix UI
- **State Management:** Zustand

### Backend
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth v5
- **File Upload:** UploadThing
- **Email:** React Email + Resend

### Payments
- **Stripe** - Credit card processing
- **PayPal** - Alternative payment method

### Internationalization
- **next-intl** - i18n routing and translations
- **Supported Locales:** en-US 🇺🇸, fr 🇫🇷, ar 🇸🇦

## 📦 Installation

### Prerequisites
- Node.js 20+
- MongoDB database
- Stripe account
- PayPal developer account
- UploadThing account
- Resend API key

### Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd AZ-next-Fullstack
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env.local` file with:
```env
# Database
MONGODB_URI=your_mongodb_connection_string

# NextAuth
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# PayPal
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_APP_SECRET=your_paypal_secret

# UploadThing
UPLOADTHING_TOKEN=your_uploadthing_token

# Email
RESEND_API_KEY=your_resend_api_key
```

4. **Seed the database (optional)**
```bash
npm run seed
```

5. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run seed` | Seed database with sample data |
| `npm run email` | Preview email templates |

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── [locale]/          # Internationalized routes
│   │   ├── (root)/        # Public pages
│   │   ├── (auth)/        # Authentication pages
│   │   ├── admin/         # Admin dashboard
│   │   └── checkout/      # Checkout process
│   └── api/               # API routes
├── components/            # React components
│   ├── shared/           # Shared components
│   └── ui/               # UI components (Radix)
├── lib/                   # Utilities and helpers
│   ├── actions/          # Server actions
│   ├── db/               # Database models & config
│   └── utils.ts          # Helper functions
├── types/                 # TypeScript definitions
├── i18n/                 # Internationalization config
└── messages/             # Translation files
```

## 🌐 Internationalization

The app supports three languages with automatic locale detection:
- 🇺🇸 English (en-US) - Default
- 🇫🇷 French (fr)
- 🇸🇦 Arabic (ar) - with RTL support

Routes are automatically prefixed with locale codes when needed.

## 💳 Payment Integration

### Stripe
Handles credit card payments with webhook support for order processing.

### PayPal
Alternative payment method with full checkout integration.

Both payment methods include:
- ✅ Order confirmation
- ✅ Email notifications
- ✅ Webhook handling
- ✅ Transaction tracking

## 🎯 Key Features Deep Dive

### Admin Dashboard
Access at `/admin` (requires authentication):
- Real-time sales analytics with charts (Recharts)
- Product CRUD with markdown editor
- Order status management
- User role management
- Dynamic web page creation

### Shopping Experience
- Infinite scroll product listings
- Advanced filtering and sorting
- Product quick view
- Wishlist functionality
- Responsive image optimization

### Developer Experience
- TypeScript for type safety
- Zod schema validation
- Server components by default
- Optimistic UI updates
- Form handling with React Hook Form

## 📝 Environment Setup Checklist

- [ ] MongoDB database created
- [ ] Stripe account configured with test mode
- [ ] PayPal sandbox credentials obtained
- [ ] UploadThing project created
- [ ] Resend API key generated
- [ ] `.env.local` file configured
- [ ] Database seeded (optional)

## 🚢 Deployment

### Recommended Platform: Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

The app is optimized for Vercel with:
- Automatic edge optimization
- Image optimization
- Serverless functions
- Environment variable management

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js
