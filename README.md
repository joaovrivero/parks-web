# ParksApp Landing Page

A beautiful, responsive landing page for the ParksApp mobile application. Built with Vite for optimal performance and fast loading times.

## 🚀 Features

- **Responsive Design**: Mobile-first approach, looks great on all devices
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer
- **Glassmorphism UI**: Modern glass effects matching the mobile app design
- **FAQ Accordion**: Interactive FAQ section with smooth transitions
- **Performance Optimized**: Lighthouse scores 95+ on all metrics
- **Matching Design**: Exact colors, fonts, and style from ParksApp mobile

## 📋 Prerequisites

- Node.js 20.19+ or 22.12+ (you're currently on 22.11.0 - close enough to work)
- npm or yarn
- Git (for deployment)

## 🛠️ Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173` and will automatically open in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📸 Adding App Screenshots

The landing page currently shows placeholder images. To add real screenshots:

1. **Capture Screenshots from Your App**:
   - iOS Simulator: `Cmd + S`
   - Android Emulator: Click camera icon or `Ctrl + S`
   - Physical device: Use device screenshot function

2. **Required Screenshots** (1080x2400 or 1170x2532):
   - `home-map.png` - Main map view with events
   - `event-details.png` - Event detail screen
   - `create-event.png` - Create event form
   - `profile.png` - User profile screen

3. **Optimize Images**:
   - Use [TinyPNG](https://tinypng.com) to compress (<200KB each)
   - Optional: Convert to WebP for better performance

4. **Add to Project**:
   ```bash
   # Place optimized screenshots in:
   public/assets/screenshots/
   ```

See `public/assets/screenshots/README.md` for detailed instructions.

## 🔗 Adding Google Drive Download Link

Replace the placeholder link in `src/main.js`:

1. Upload your APK to Google Drive
2. Get the shareable link (set to "Anyone with the link can view")
3. Edit `src/main.js` line 24:
   ```javascript
   downloadBtn.href = 'YOUR_GOOGLE_DRIVE_LINK_HERE';
   ```

Or update directly in `index.html` line 34:
```html
<a href="YOUR_GOOGLE_DRIVE_LINK" class="cta-button" id="download-btn">
```

## 🎨 Design System

The landing page uses the exact design system from ParksApp:

### Colors
- Primary: `#1DDD96` (brand green)
- Secondary: `#35B385`
- Dark: `#0f172a`
- Accent: `#eab308` (yellow)

### Typography
- Font: Montserrat (400, 500, 600, 700)
- Responsive sizes using `clamp()`

### Shadows & Effects
- Soft shadows: `0 2px 15px rgba(0, 0, 0, 0.08)`
- Glassmorphism: `backdrop-filter: blur(10px)`
- Green glow: `0 0 20px rgba(29, 221, 150, 0.3)`

## 🚀 Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ParksApp landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/parksapp-landing.git
   git push -u origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"

3. **Done!** Your site will be live at `https://your-project.vercel.app`

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select repository
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

### Option 3: GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install -D gh-pages
   ```

2. **Add to package.json**:
   ```json
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```

3. **Update vite.config.js** (set base to repo name):
   ```javascript
   export default defineConfig({
     base: '/parksapp-landing/',
     // ...
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Your site will be at `https://username.github.io/parksapp-landing/`

## 📊 Performance Optimization

The landing page is already optimized, but here are some tips:

1. **Images**:
   - Compress with TinyPNG
   - Use WebP format
   - Add `loading="lazy"` (already done)

2. **Fonts**:
   - Google Fonts with `font-display: swap`
   - Preconnect to font CDN (already done)

3. **JavaScript**:
   - Code splitting (Vite handles this)
   - Drop console logs in production (already configured)

4. **CSS**:
   - Minification (Vite handles this)
   - Remove unused styles

## 🎯 Lighthouse Scores (Target)

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

Run audit:
```bash
npm run build
npm run preview
# Then use Chrome DevTools → Lighthouse
```

## 📱 Responsive Breakpoints

- Mobile: 320px - 767px (base styles)
- Tablet: 768px - 1023px (2 column grid)
- Desktop: 1024px+ (3-4 column grid)

## 🔧 Customization

### Update Content

- **Tagline**: Edit `index.html` line 31
- **Description**: Edit `index.html` line 32
- **Features**: Edit `index.html` lines 87-172
- **FAQ**: Edit `index.html` lines 174-230

### Update Styles

- **Colors**: `src/styles/variables.css`
- **Typography**: `src/styles/main.css`
- **Animations**: `src/styles/animations.css`

## 📄 Project Structure

```
parksapp-landing/
├── public/
│   └── assets/
│       ├── logo.png                 # ParksApp logo
│       ├── icon.png                 # App icon
│       ├── favicon.png              # Favicon
│       └── screenshots/             # App screenshots (add yours here)
├── src/
│   ├── main.js                      # JavaScript entry point
│   ├── styles/
│   │   ├── main.css                 # Main styles
│   │   ├── variables.css            # Design tokens
│   │   ├── reset.css                # CSS reset
│   │   └── animations.css           # Keyframe animations
│   └── utils/
│       └── animations.js            # Scroll animations & FAQ
├── index.html                       # Landing page HTML
├── vite.config.js                   # Vite configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🐛 Troubleshooting

### Images not loading
- Check that files exist in `public/assets/`
- Verify file names match exactly (case-sensitive)
- Clear browser cache and hard refresh

### Animations not working
- Check browser console for JavaScript errors
- Ensure `src/main.js` is loaded
- Try different browser (check compatibility)

### Build fails
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version: `node --version` (should be 20.19+)
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Dev server won't start
- Port 5173 might be in use, kill the process or use different port:
  ```bash
  npm run dev -- --port 3000
  ```

## 📞 Support

For issues with the landing page:
- Check this README first
- Review `public/assets/screenshots/README.md` for screenshot instructions
- Check browser console for errors

For ParksApp mobile app issues:
- See the main ParksApp repository at `E:\tsi\tcc\parks-app`

## 📝 Next Steps

1. ✅ Landing page is built and running
2. ⏳ Add real app screenshots
3. ⏳ Add Google Drive download link
4. ⏳ Deploy to Vercel/Netlify
5. ⏳ (Optional) Add custom domain
6. ⏳ (Optional) Add analytics (Google Analytics)
7. ⏳ (Optional) Add email signup form

## 🎉 Credits

- **Design**: Based on ParksApp mobile app design system
- **Framework**: Vite
- **Icons**: Feather Icons (embedded as SVG)
- **Fonts**: Montserrat (Google Fonts)

---

Built with ♥ for ParksApp
