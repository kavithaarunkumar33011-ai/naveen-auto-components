# Naveen Auto Components – Corporate Website

This is a multi-page, SEO-optimized corporate web application for **Naveen Auto Components**, a leading heavy engineering and fabrication manufacturer in Chennai and Cuddalore, Tamil Nadu.

Built using **React 19**, **React Router v7** (`createBrowserRouter`), **Bootstrap 5** (`react-bootstrap`), and **react-helmet-async**.

---

## 🚀 Getting Started & Local Development

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone or navigate to directory
cd Naveen

# Install dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

---

## 📦 Building for Production & Deployment

To compile static assets for hosting on Vercel, Netlify, Firebase Hosting, or AWS S3:

```bash
npm run build
```

The output files will be generated in the `dist/` directory.

### Host Deployment Notes (SPA Routing)
Since this site uses React Router v6 client-side routing (`createBrowserRouter`), ensure your host is configured to rewrite all request URLs to `/index.html`.

- **Vercel / Netlify**: Automatically detected via `vite.config.js`.
- **Firebase Hosting**: Set `"rewrite": [ { "source": "**", "destination": "/index.html" } ]` in `firebase.json`.
- **Apache / Nginx**: Add a standard URL rewrite rule to redirect all non-file requests to `index.html`.

---

## ⚙️ Configuration & Backend Integration Notes

### 1. Replacing Image Placeholders
- Project photo cards and service banners use high-resolution technical SVG generators (`IndustrialGraphic.jsx`).
- To replace placeholders with real photos from the company profile deck:
  1. Add image files into `public/images/`.
  2. Update image file references in `src/data/projectsData.js` and `src/data/servicesData.js`.

### 2. Google Maps Integration
- Embedded maps are rendered using Google Maps iframe embeds in `src/data/companyData.js` and `src/pages/Contact.jsx`.
- To swap in live Google Maps API keys / interactive pins:
  1. Generate an Embed API Key in Google Cloud Console.
  2. Replace `mapEmbed` URLs in `src/data/companyData.js` with your key-authenticated URLs.

### 3. Contact Form Backend (EmailJS / Formspree / Custom API)
- The contact form (`src/components/ContactForm.jsx`) currently operates client-side with full validation and simulated response handling.
- **To connect EmailJS**:
  ```javascript
  import emailjs from '@emailjs/browser';
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');
  ```
- **To connect Formspree**:
  Change `<Form onSubmit={handleSubmit}>` to post to `https://formspree.io/f/{your_form_id}`.

---

## 🔍 SEO & Web Vitals Checklist

- **Per-Page SEO**: Implemented via `react-helmet-async` in `src/components/SEO.jsx`.
- **Structured Data**: Injects JSON-LD `LocalBusiness` / `Organization` schema on all pages and `Service` schema on sub-pages.
- **Lazy Loading**: Route-level code splitting using `React.lazy` and `<Suspense>`.
- **Sitemap & Robots**: Pre-configured in `public/sitemap.xml` and `public/robots.txt`.
