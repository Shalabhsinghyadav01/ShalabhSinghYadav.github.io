# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my work as a Data Analyst, featuring projects, experience, and skills in a clean, professional design.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Fully Responsive**: Optimized for all device sizes (mobile-first approach)
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **SEO Friendly**: Comprehensive metadata and semantic HTML
- **Accessible**: ARIA labels and keyboard navigation support
- **Dark Theme**: Modern dark color scheme with blue/purple accents

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Poppins (Google Fonts)

## 📦 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd MyPortfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

## 📤 Deploy to GitHub Pages

This project is configured for static export and GitHub Pages deployment.

1. **Update `next.config.js`** (already configured):
   ```js
   output: "export",
   ```

2. **Build the static site**:
   ```bash
   npm run build
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

4. **Configure GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select source: "GitHub Actions" or "Deploy from a branch"
   - Select branch: `main` and folder: `/out` (or `/` if using GitHub Actions)

5. **Alternative: Use GitHub Actions** (recommended):
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

## 📝 Customization

### Update Content

Edit the data files in `/lib/data.ts` to update:
- Experience items
- Projects
- Skills

### Update Contact Information

Edit `/components/sections/Contact.tsx` and `/components/Footer.tsx` to update:
- Email addresses
- Social media links
- Contact information

### Update Personal Information

Edit `/app/layout.tsx` to update:
- Site metadata
- SEO information
- Open Graph tags

### Customize Colors

Edit `/tailwind.config.ts` to modify the color palette:
- Primary colors (blue)
- Accent colors (purple)
- Neutral colors

## 📁 Project Structure

```
MyPortfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Footer.tsx          # Footer component
│   └── sections/
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About section
│       ├── Experience.tsx  # Experience section
│       ├── Projects.tsx    # Projects section
│       ├── Skills.tsx      # Skills section
│       └── Contact.tsx     # Contact section
├── lib/
│   └── data.ts             # Content data (projects, experience, skills)
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Design Principles

This portfolio is inspired by modern design principles while maintaining originality:

- **Visual Hierarchy**: Clear section separation with numbered headings
- **Typography**: Professional font pairing (Inter + Poppins)
- **Color Scheme**: Modern dark theme with blue/purple gradients
- **Spacing**: Consistent rhythm using Tailwind's spacing scale
- **Animations**: Subtle, performance-conscious animations
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

## 🔧 Environment Variables

No environment variables are required for basic functionality. If you add features like contact forms or analytics, you may need to add:

```env
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and customize for your own use!

## 📧 Contact

For questions or feedback, reach out through:
- Email: shalabhsinghyadav@example.com
- LinkedIn: [linkedin.com/in/shalabhsinghyadav](https://linkedin.com/in/shalabhsinghyadav)
- GitHub: [github.com/Shalabhsinghyadav01](https://github.com/Shalabhsinghyadav01)

---

Built with ❤️ using Next.js and Tailwind CSS
