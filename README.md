# Contrad Namiseb | Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and professional background. Built with vanilla HTML, CSS, and JavaScript for optimal performance and maintainability.

## 🚀 Live Site

Visit: **[https://contradnamiseb.github.io](https://contradnamiseb.github.io)**

## ✨ Features

- **🎨 Dark/Light Theme** - Automatic theme detection with manual toggle and localStorage persistence
- **⌨️ Dynamic Typewriter** - Animated text showcasing technical skills with reduced-motion support
- **📱 Fully Responsive** - Mobile-first design that works seamlessly on all devices
- **♿ Accessibility** - ARIA labels, keyboard navigation, skip links, and screen reader support
- **🎯 Project Showcase** - Featured projects with live demos and GitHub repository links
- **📧 Contact Integration** - Email copy functionality and social media links
- **🔍 SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap, and robots.txt
- **⚡ Performance** - Optimized images (68% reduction), minimal dependencies, fast load times

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **Vanilla JavaScript** - No frameworks, pure ES6+
- **Font Awesome** - Icon library (v6.4.0)
- **Google Fonts** - Inter & Outfit font families
- **Google Analytics** - Traffic tracking

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # All styles, animations, and theme variables
├── scripts.js          # Interactive functionality and animations
├── 404.html            # Custom 404 error page
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # Site structure for SEO
├── images/             # Optimized images and icons
│   ├── fav-icon.png    # 32×32 favicon (optimized)
│   ├── fav-icon-512.png # 512×512 Apple touch icon
│   ├── 1767095813.png  # Profile image (optimized)
│   ├── hotel-website.png # Project screenshot
│   └── skynamibia.png  # Project screenshot
└── README.md           # This file
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ContradNamiseb/ContradNamiseb.github.io.git
   cd ContradNamiseb.github.io
   ```

2. **Open in browser**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Or using PHP
   php -S localhost:8000
   
   # Or simply open index.html in your browser
   open index.html
   ```

3. **Visit** `http://localhost:8000` in your browser

### Image Optimization

Images have been optimized to reduce page load time by 68% (from 6.3MB to 2.0MB):

```bash
# Original sizes:
# - fav-icon.png: 4.2MB → 2.1KB (32×32)
# - profile image: 1.1MB → 776KB
# - screenshots: ~1MB → ~500KB

# To re-optimize images (requires ImageMagick):
convert original.png -resize 800x600 -quality 85 -strip optimized.png
```

## 🎨 Customization

### Update Content

- **Personal Info**: Edit text in `index.html` (name, bio, projects, contact)
- **Theme Colors**: Modify CSS variables in `styles.css` (`:root` section)
- **Projects**: Update project cards in the `#projects` section
- **Skills**: Modify skill cards in the `#skills` section

### Add New Projects

```html
<div class="project-card fade-in">
    <div class="project-content">
        <div class="project-icon"><i class="fa-solid fa-code"></i></div>
        <h3 class="project-title">Project Name</h3>
        <p class="project-desc">Description here...</p>
        <div class="project-tags">
            <span>Tech 1</span>
            <span>Tech 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-btn btn-demo">View Demo</a>
            <a href="#" class="project-btn btn-code">View Code</a>
        </div>
    </div>
</div>
```

## 🔧 Features in Detail

### Accessibility
- **WCAG 2.1 AA compliant** color contrast
- **Keyboard navigation** fully supported
- **ARIA labels** on all interactive elements
- **Skip to main content** link for screen readers
- **Reduced motion** support for animations
- **Focus indicators** visible on all elements

### Performance
- **Optimized images** using ImageMagick compression
- **Minimal dependencies** (no heavy frameworks)
- **Preconnect** to external resources
- **Lazy animations** using Intersection Observer
- **Mobile-first** CSS approach

### SEO
- **Structured data** with semantic HTML
- **Meta descriptions** and keywords
- **Open Graph** tags for social sharing
- **Twitter Card** integration
- **Canonical URLs** to prevent duplicates
- **Sitemap.xml** for search engines
- **Robots.txt** for crawler guidance

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

© 2025 Contrad Namiseb. All rights reserved.

## 📞 Contact

- **Email**: contradnamiseb@gmail.com
- **LinkedIn**: [Contrad Namiseb](https://www.linkedin.com/in/contrad-namiseb-093686210/)
- **GitHub**: [@ContradNamiseb](https://github.com/ContradNamiseb)

---

Built with ❤️ using vanilla HTML, CSS, and JavaScript

