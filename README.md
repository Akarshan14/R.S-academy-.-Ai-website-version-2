# R.S. Academy Website

A modern, high-converting website for R.S. Academy - a premier coaching institute specializing in Class 11, Class 12, and NEET Science entrance preparation in Dhankawadi, Pune.

## 🎯 Features

- **Sticky Header** with logo, navigation, and contact number
- **Hero Section** with compelling headline and call-to-action
- **Academy Difference** showcasing 4 key features
- **Student Reviews** with authentic testimonials
- **Contact Form** with WhatsApp integration
- **Responsive Design** optimized for all devices
- **WhatsApp Floating Button** for instant inquiries

## 🛠️ Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"
   - Your site will be live at: `your-project.vercel.app`

### Deploy to Netlify

1. **Build the project:**
   ```bash
   pnpm build
   ```

2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Your site will be live instantly!

### Manual Deployment

```bash
# Build the project
pnpm build

# The dist folder contains all production files
# Upload the dist folder to your web hosting
```

## 📁 Project Structure

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main app component
│   │   └── components/
│   │       ├── Header.tsx          # Sticky header
│   │       ├── Hero.tsx            # Hero section
│   │       ├── AcademyDifference.tsx
│   │       ├── Reviews.tsx         # Student testimonials
│   │       ├── Contact.tsx         # Contact form
│   │       ├── Footer.tsx          # Footer section
│   │       ├── WhatsAppButton.tsx  # Floating button
│   │       └── ImageWithFallback.tsx
│   ├── styles/
│   │   ├── index.css              # Main styles entry
│   │   ├── theme.css              # Color theme
│   │   └── tailwind.css           # Tailwind config
│   └── main.tsx                   # App entry point
├── index.html                     # HTML template
├── package.json
├── vite.config.ts
└── vercel.json                    # Vercel configuration
```

## 🎨 Color Palette

- **Deep Blue:** `#1A237E` (Primary)
- **Pure White:** `#FFFFFF` (Background)
- **Vibrant Orange:** `#FF6F00` (Accents)
- **Teal:** `#00BCD4` (CTA Buttons)

## 📞 Contact Information

- **Phone:** +91 98509 11010
- **Address:** Sr No 28, Saudagar Society, Dhankawadi, Pune - 411043
- **Hours:** Open Daily, 10:00 AM - 9:00 PM

## 🔧 Customization

### Update Contact Number

Edit the phone number in:
- `src/app/components/Header.tsx`
- `src/app/components/Hero.tsx`
- `src/app/components/Contact.tsx`
- `src/app/components/Footer.tsx`
- `src/app/components/WhatsAppButton.tsx`

### Change Colors

Update color variables in `src/styles/theme.css`:
```css
--primary: #1A237E;
--accent: #FF6F00;
```

### Modify Content

All content is in the component files under `src/app/components/`

## ✅ Build Status

✅ Build successful  
✅ All components working  
✅ Mobile responsive  
✅ WhatsApp integration active  
✅ SEO optimized  
✅ Production ready  

## 📝 License

© 2026 R.S. Academy. All rights reserved.
