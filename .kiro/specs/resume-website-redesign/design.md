# Design Document: Resume Website Redesign

## Overview

This design describes a single-page static website that presents professional resume information in a modern, clean format. The website will be built using pure HTML, CSS, and JavaScript without any build process, making it ideal for GitHub Pages hosting and simple local development.

The design emphasizes simplicity, maintainability, and user experience. By eliminating the React framework and build complexity, the website becomes easier to maintain while still providing a professional, responsive presentation.

## Architecture

### High-Level Structure

The website follows a simple three-tier architecture:

1. **Content Layer (HTML)**: Single index.html file containing all semantic content
2. **Presentation Layer (CSS)**: Stylesheet(s) defining visual appearance and responsive behavior
3. **Behavior Layer (JavaScript)**: Optional enhancements for smooth scrolling and navigation

```
resume-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript for interactivity
├── images/
│   ├── me.jpg          # Profile photo
│   └── favicon/        # Favicon assets
│       ├── favicon.ico
│       ├── favicon-16x16.png
│       ├── favicon-32x32.png
│       └── apple-touch-icon.png
└── README.md           # Documentation
```

### Technology Stack

- **HTML5**: Semantic markup for content structure
- **CSS3**: Modern styling with Flexbox/Grid for layout, media queries for responsiveness
- **Vanilla JavaScript**: DOM manipulation for smooth scrolling and navigation highlighting
- **Font Awesome**: Icon library (loaded via CDN)

### Design Principles

1. **Progressive Enhancement**: Core content accessible without JavaScript
2. **Mobile-First**: Design starts with mobile layout, enhanced for larger screens
3. **Semantic HTML**: Proper use of HTML5 semantic elements for accessibility
4. **No Build Process**: All files are directly editable and servable

## Components and Interfaces

### HTML Structure

The index.html file will be organized into semantic sections:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, title, favicon links, CSS -->
</head>
<body>
  <nav id="navbar">
    <!-- Navigation menu with section links -->
  </nav>
  
  <main>
    <section id="about">
      <!-- Profile photo, name, bio, contact links -->
    </section>
    
    <section id="resume">
      <!-- Education, experience, skills -->
    </section>
    
    <section id="projects">
      <!-- Project showcase -->
    </section>
    
    <section id="contact">
      <!-- Contact information and links -->
    </section>
  </main>
  
  <footer>
    <!-- Copyright, additional links -->
  </footer>
  
  <script src="js/main.js"></script>
</body>
</html>
```

### Navigation Component

The navigation bar will:
- Be fixed at the top of the viewport (or hamburger menu on mobile)
- Contain links to each section (#about, #resume, #projects, #contact)
- Highlight the active section as the user scrolls
- Collapse into a hamburger menu on mobile devices

**Interface:**
```javascript
// Navigation state
{
  activeSection: string,  // Current section ID
  isMenuOpen: boolean     // Mobile menu state
}

// Functions
function scrollToSection(sectionId)
function updateActiveNavItem(sectionId)
function toggleMobileMenu()
```

### Section Components

Each section will be a semantic HTML5 `<section>` element with:
- Unique ID for navigation targeting
- Consistent padding and spacing
- Responsive layout that adapts to viewport size

**About Section:**
- Profile photo (circular crop)
- Name (h1)
- Tagline/bio
- Contact links (email, LinkedIn)

**Resume Section:**
- Education subsection
- Experience subsection (if applicable)
- Skills subsection (if applicable)

**Projects Section:**
- Grid/list of projects
- Each project with title, description, and links

**Contact Section:**
- Email link
- LinkedIn link
- Additional social links (if applicable)

### Responsive Breakpoints

```css
/* Mobile: < 768px (default) */
/* Tablet: 768px - 1024px */
@media (min-width: 768px) { ... }

/* Desktop: > 1024px */
@media (min-width: 1024px) { ... }
```

## Data Models

### Content Data Structure

While this is a static site, the content follows a logical structure:

```javascript
// Personal Information
{
  name: "James D. Gardner",
  email: "jclimb23@outlook.com",
  linkedin: "https://www.linkedin.com/in/james-gardner-16b265a4/",
  bio: "Hi, I'm James. I like Automating things.",
  photo: "/images/me.jpg"
}

// Education
{
  institution: "WGU",
  status: "graduate",
  degree: string,      // To be filled with actual degree
  year: string         // To be filled with graduation year
}

// Project (if multiple projects)
{
  title: string,
  description: string,
  technologies: string[],
  links: {
    github?: string,
    demo?: string
  }
}
```

### Asset References

```javascript
// Favicon assets
{
  ico: "/images/favicon/favicon.ico",
  png16: "/images/favicon/favicon-16x16.png",
  png32: "/images/favicon/favicon-32x32.png",
  appleTouchIcon: "/images/favicon/apple-touch-icon.png"
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Properties

Property 1: Navigation links scroll to target sections
*For any* navigation link in the navbar, clicking it should result in the viewport scrolling to the corresponding section with that ID.
**Validates: Requirements 1.4**

Property 2: All asset paths are relative
*For any* asset reference (images, CSS, JavaScript) in the HTML or CSS files, the path should be relative (not absolute URLs starting with http:// or https://).
**Validates: Requirements 2.5**

Property 3: All assets load successfully
*For any* asset referenced in the HTML or CSS, when the website is served via an HTTP server, the asset should return a successful HTTP status code (200).
**Validates: Requirements 6.2**

Property 4: Clickable elements have pointer cursor
*For any* clickable element (links, buttons), the computed CSS cursor property should be "pointer".
**Validates: Requirements 10.2**

Property 5: Active navigation updates on scroll
*For any* scroll position within a section's boundaries, the navigation item corresponding to that section should have the "active" class applied.
**Validates: Requirements 10.5**

### Examples and Edge Cases

The following specific examples should be verified through unit tests:

**Content Examples (Requirement 3):**
- Name "James D. Gardner" appears in the about section
- Email "jclimb23@outlook.com" appears as a mailto: link
- LinkedIn URL appears as a link with target="_blank"
- Education "WGU graduate" appears in the resume section
- Bio text appears in the about section
- Profile photo /images/me.jpg is referenced
- Favicon assets from /images/favicon/ are linked in the head

**Structure Examples (Requirements 1, 2):**
- All sections exist in a single HTML file
- Sections appear in order: About, Resume, Projects, Contact
- Only static files (.html, .css, .js, images) exist in the project
- No build configuration files exist (package.json, webpack.config.js, etc.)
- No React files exist (.jsx, React imports)
- No /build directory exists
- No node_modules directory exists

**Responsive Examples (Requirement 4):**
- At viewport width < 768px, mobile layout is applied
- At viewport width 768-1024px, tablet layout is applied
- At viewport width > 1024px, desktop layout is applied
- Navigation is visible/accessible on mobile devices

**Interactive Examples (Requirement 10):**
- Navigation links have hover styles defined
- Email link uses mailto: protocol
- LinkedIn link has target="_blank" attribute

**Documentation Examples (Requirement 8):**
- README.md exists with local development instructions
- README.md documents Python http.server usage
- README.md documents GitHub Pages deployment
- README.md documents project structure

## Error Handling

### Missing Assets

If an asset file is missing or cannot be loaded:
- The browser will display a broken image icon or fail to apply styles
- The website should still be functional with degraded appearance
- Console errors will indicate which assets failed to load

**Mitigation:**
- Use alt text for images to provide context when images fail
- Ensure critical content is in HTML, not dependent on CSS/JS
- Test asset loading before deployment

### JavaScript Disabled

If JavaScript is disabled in the user's browser:
- Smooth scrolling will not work (browser default anchor scrolling will occur)
- Active navigation highlighting will not work
- Mobile menu toggle will not work

**Mitigation:**
- Use CSS-only mobile menu as fallback (checkbox hack)
- Ensure all content is accessible without JavaScript
- Use native anchor links (#section-id) so navigation works without JS

### Unsupported Browsers

If the user's browser doesn't support modern CSS features:
- Layout may degrade to simpler single-column format
- Some visual enhancements may not appear

**Mitigation:**
- Use progressive enhancement approach
- Provide fallbacks for critical layout features
- Test in multiple browsers during development

### Invalid HTML Structure

If the HTML structure is malformed:
- Browsers will attempt to correct the structure (error recovery)
- Layout and styling may break
- Navigation may not work correctly

**Mitigation:**
- Validate HTML using W3C validator
- Use proper semantic HTML5 structure
- Test in multiple browsers

## Testing Strategy

### Dual Testing Approach

This project will use both unit tests and property-based tests to ensure comprehensive coverage:

- **Unit tests**: Verify specific content examples, structure requirements, and edge cases
- **Property tests**: Verify universal properties that should hold across all elements

### Unit Testing

Unit tests will focus on:

1. **Content Verification**: Specific text, links, and images appear correctly
2. **Structure Verification**: HTML structure matches requirements
3. **File Organization**: Correct files exist, incorrect files don't exist
4. **Responsive Breakpoints**: Layout changes at specific viewport widths
5. **Interactive Elements**: Hover states, link attributes, cursor styles

**Testing Tools:**
- **Jest** with **jsdom**: For testing HTML structure and DOM manipulation
- **Puppeteer** or **Playwright**: For end-to-end testing of interactive features

**Example Unit Tests:**
```javascript
describe('Content Display', () => {
  test('displays name "James D. Gardner"', () => {
    // Load HTML and verify name appears
  });
  
  test('email link uses mailto protocol', () => {
    // Verify email link has href="mailto:jclimb23@outlook.com"
  });
});

describe('File Structure', () => {
  test('no React files exist', () => {
    // Verify no .jsx files in project
  });
  
  test('no build directory exists', () => {
    // Verify /build directory doesn't exist
  });
});
```

### Property-Based Testing

Property tests will verify universal rules using a property-based testing library:

**Testing Library:** **fast-check** (JavaScript property-based testing library)

**Configuration:**
- Minimum 100 iterations per property test
- Each test tagged with feature name and property number

**Property Tests:**

1. **Navigation Link Scrolling** (Property 1)
   - Generate various section IDs
   - Verify clicking navigation links scrolls to correct sections
   - **Tag: Feature: resume-website-redesign, Property 1: Navigation links scroll to target sections**

2. **Relative Asset Paths** (Property 2)
   - Parse all asset references from HTML and CSS
   - Verify each path is relative (doesn't start with http:// or https://)
   - **Tag: Feature: resume-website-redesign, Property 2: All asset paths are relative**

3. **Asset Loading** (Property 3)
   - Collect all asset URLs from HTML and CSS
   - Verify each asset returns HTTP 200 when requested
   - **Tag: Feature: resume-website-redesign, Property 3: All assets load successfully**

4. **Clickable Cursor Styles** (Property 4)
   - Collect all clickable elements (a, button, etc.)
   - Verify each has cursor: pointer in computed styles
   - **Tag: Feature: resume-website-redesign, Property 4: Clickable elements have pointer cursor**

5. **Active Navigation Updates** (Property 5)
   - Simulate scroll positions within different sections
   - Verify the correct navigation item has the "active" class
   - **Tag: Feature: resume-website-redesign, Property 5: Active navigation updates on scroll**

**Example Property Test:**
```javascript
const fc = require('fast-check');

// Feature: resume-website-redesign, Property 2: All asset paths are relative
test('all asset paths are relative', () => {
  fc.assert(
    fc.property(
      fc.constantFrom(...getAllAssetReferences()),
      (assetPath) => {
        return !assetPath.startsWith('http://') && 
               !assetPath.startsWith('https://');
      }
    ),
    { numRuns: 100 }
  );
});
```

### Integration Testing

Integration tests will verify:
- The complete website loads without errors when served locally
- All sections are accessible via navigation
- Responsive behavior works across breakpoints
- External links open correctly

### Manual Testing Checklist

Before deployment, manually verify:
- [ ] Website displays correctly on mobile devices (< 768px)
- [ ] Website displays correctly on tablets (768-1024px)
- [ ] Website displays correctly on desktop (> 1024px)
- [ ] All links work correctly
- [ ] Smooth scrolling works
- [ ] Active navigation highlighting works
- [ ] Images load correctly
- [ ] Favicon appears in browser tab
- [ ] Website works in Chrome, Firefox, Safari, Edge

### Testing During Development

1. **Local Server Testing**: Serve the site using `python -m http.server` and test in browser
2. **HTML Validation**: Use W3C HTML validator to check markup
3. **CSS Validation**: Use W3C CSS validator to check styles
4. **Accessibility Testing**: Use browser dev tools to check accessibility
5. **Responsive Testing**: Use browser dev tools to test different viewport sizes

## Implementation Notes

### CSS Organization

Consider organizing CSS into logical sections:
```css
/* Reset and Base Styles */
/* Typography */
/* Layout */
/* Navigation */
/* Sections */
/* Responsive Media Queries */
```

### JavaScript Organization

Keep JavaScript minimal and focused:
```javascript
// Smooth scrolling for navigation links
// Active navigation highlighting on scroll
// Mobile menu toggle (if needed)
```

### Performance Considerations

- Optimize images (compress profile photo)
- Use appropriate image formats (WebP with fallbacks)
- Minimize CSS and JavaScript for production
- Load Font Awesome from CDN with integrity hash
- Consider lazy loading for images below the fold

### Accessibility Considerations

- Use semantic HTML5 elements
- Provide alt text for images
- Ensure sufficient color contrast
- Make interactive elements keyboard accessible
- Use ARIA labels where appropriate
- Test with screen readers

### Browser Compatibility

Target modern browsers (last 2 versions):
- Chrome/Edge (Chromium)
- Firefox
- Safari

Use autoprefixer or manual vendor prefixes for CSS features that need them.
