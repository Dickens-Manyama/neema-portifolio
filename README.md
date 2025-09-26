# Neema Theonest Portfolio Website

A modern, responsive portfolio website for Neema Theonest, Environmental & Natural Resources Conserver, featuring bilingual support (English/Swahili), environmental themes, and professional presentation.

## 🌟 Features

- **Fully Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Bilingual Support**: English and Swahili language toggle
- **Environmental Theme**: Green, blue, and earth tone color palette
- **Interactive Elements**: Smooth scrolling, animations, hover effects
- **Professional Sections**: Hero, About, Leadership, Experience, Media, Youth Empowerment, Charity, Contact
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags, structured data, accessibility features
- **Fast Loading**: Optimized CSS and JavaScript

## 📁 File Structure

```
neylee profile/
├── index.html          # Main HTML file
├── styles.css          # Comprehensive CSS styling
├── script.js           # Interactive JavaScript functionality
├── README.md           # This file
├── Images/             # All website images
│   ├── about.jpg       # Profile photos
│   ├── about2.jpg
│   ├── charity*.jpg    # Charity work photos
│   ├── env*.jpg        # Environmental work photos
│   ├── givingback*.jpg # Community service photos
│   ├── l*.jpg          # Leadership photos
│   ├── meeting*.jpg    # Meeting and conference photos
│   ├── plant*.jpg      # Environmental projects
│   ├── podcast.jpg     # Media appearances
│   └── portifolio.webp # Portfolio image
└── assets/             # Optional: Organized assets
    ├── css/
    ├── js/
    └── images/
```

## 🚀 Getting Started

### Option 1: Simple Setup
1. All files are ready to use as-is
2. Open `index.html` in any modern web browser
3. The website will work locally with all features

### Option 2: Web Server Setup (Recommended)
1. Use a local web server for better performance:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (if you have live-server)
   npx live-server
   
   # Using PHP
   php -S localhost:8000
   ```
2. Open `http://localhost:8000` in your browser

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit these in `styles.css`:

```css
:root {
    --primary-green: #2d5016;
    --secondary-green: #4a7c59;
    --accent-green: #7cb342;
    --light-green: #c8e6c9;
    /* ... other colors */
}
```

### Content
- **Text Content**: Edit directly in `index.html` or through the language system in `script.js`
- **Images**: Replace image files with new ones (keep same names for automatic integration)
- **Contact Info**: Update email, phone, and location in the contact section

### Languages
- **Adding Languages**: Extend the `translations` object in `script.js`
- **Current Support**: English (en) and Swahili (sw)

## 📱 Image Optimization

For better performance, consider optimizing images:

### Recommended Sizes:
- **Hero Image**: 1920x1080px (landscape)
- **Profile Photos**: 800x800px (square)
- **Section Images**: 800x600px (4:3 ratio)
- **Gallery Images**: 600x400px (3:2 ratio)

### Optimization Tools:
- Online: TinyPNG, ImageOptim, Squoosh
- Command line: ImageMagick, Sharp
- Photoshop: "Save for Web"

### Quick Optimization Commands:
```bash
# Using ImageMagick (if installed)
magick input.jpg -resize 800x600 -quality 85 output.jpg

# Batch process all images
for %%f in (*.jpg) do magick "%%f" -resize 800x600 -quality 85 "optimized_%%f"
```

## 🔧 Technical Details

### Browser Support
- **Modern Browsers**: Chrome 70+, Firefox 65+, Safari 12+, Edge 79+
- **Features Used**: CSS Grid, Flexbox, CSS Custom Properties, ES6 JavaScript
- **Fallbacks**: Graceful degradation for older browsers

### Performance Features
- **Lazy Loading**: Images load as they come into viewport
- **Debounced Scroll**: Optimized scroll event handling
- **Minification Ready**: Code is structured for easy minification
- **Service Worker Ready**: PWA capabilities prepared

### Accessibility Features
- **WCAG 2.1 Compliant**: AA level compliance
- **Semantic HTML**: Proper heading structure and landmarks
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Friendly**: ARIA labels and descriptions
- **Color Contrast**: Meets accessibility guidelines

## 📋 Sections Overview

1. **Hero Section**: Main introduction with profile photo and call-to-action buttons
2. **About**: Professional background and core skills with icons
3. **Leadership**: East Africa Community Youth Parliament role and advocacy
4. **Experience**: Timeline of professional roles with achievements
5. **Media**: Social media and traditional media advocacy work
6. **Youth Empowerment**: Focus on empowering young girls and entrepreneurship
7. **Charity**: Community service and charitable initiatives
8. **Mission Statement**: Core values and mission
9. **Contact**: Contact form, information, and location

## 🌐 Deployment Options

### Free Hosting Platforms:
- **GitHub Pages**: Push to GitHub repository and enable Pages
- **Netlify**: Drag and drop deployment
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Google's hosting platform

### Domain Setup:
1. Purchase domain from registrar (GoDaddy, Namecheap, etc.)
2. Configure DNS to point to hosting platform
3. Enable SSL certificate (usually automatic)

## 📞 Contact Information

For technical support or modifications to this website:

- **Template Created**: September 2025
- **Technologies**: HTML5, CSS3, Vanilla JavaScript
- **Responsive Framework**: Custom CSS Grid and Flexbox
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter (body), Playfair Display (headings)

## 🔄 Updates and Maintenance

### Regular Updates:
- Content updates: Edit HTML directly
- New photos: Replace image files
- Contact information: Update in contact section
- CV file: Add `Neema_Theonest_CV.pdf` to root directory

### Version Control:
Consider using Git for version control:
```bash
git init
git add .
git commit -m "Initial portfolio website"
```

## 📝 License

This portfolio website template is created specifically for Neema Theonest. The code structure can be adapted for other portfolio websites with proper attribution.

---

**Built with ❤️ for environmental conservation and youth empowerment**