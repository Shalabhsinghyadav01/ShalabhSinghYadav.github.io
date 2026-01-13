# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Before You Deploy

### Update Contact Information

1. **Email Address**:
   - Edit `components/sections/Contact.tsx` (line with `mailto:`)
   - Edit `components/Footer.tsx` if needed

2. **Social Media Links**:
   - Update links in `components/Footer.tsx`
   - Update links in `components/sections/Contact.tsx`

3. **Resume PDF**:
   - Place your resume as `public/resume.pdf`
   - The navigation and hero section link to this file

### Update Personal Information

1. **Site Metadata**:
   - Edit `app/layout.tsx` (metadata object)
   - Update title, description, and Open Graph tags

2. **Content**:
   - Edit `lib/data.ts` to update:
     - Experience items
     - Projects
     - Skills

### Customize Colors (Optional)

Edit `tailwind.config.ts` to change:
- Primary colors (currently blue)
- Accent colors (currently purple)
- Neutral colors

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates an `out/` directory with static files ready for deployment.

---

## 📤 Deploy to GitHub Pages

### Option 1: GitHub Actions (Recommended)

1. Push your code to GitHub
2. The workflow in `.github/workflows/deploy.yml` will automatically deploy
3. Enable GitHub Pages in repository settings
4. Select "GitHub Actions" as the source

### Option 2: Manual Deployment

1. Build the project: `npm run build`
2. Push the `out/` folder to `gh-pages` branch
3. Configure GitHub Pages to serve from `gh-pages` branch

---

## ✅ Checklist Before Going Live

- [ ] Update email address in Contact section
- [ ] Update social media links
- [ ] Add resume.pdf to public folder
- [ ] Update site metadata in layout.tsx
- [ ] Review all content in lib/data.ts
- [ ] Test all links (GitHub, LinkedIn, Tableau, etc.)
- [ ] Test responsive design on mobile
- [ ] Build and test production build locally
- [ ] Verify SEO metadata
- [ ] Check accessibility (keyboard navigation, screen readers)

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Next Steps

- Read `README.md` for detailed documentation
- Read `DESIGN_DECISIONS.md` for design rationale
- Read `ANALYSIS_SUMMARY.md` for design analysis

---

Happy coding! 🎉
