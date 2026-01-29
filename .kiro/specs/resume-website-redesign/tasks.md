# Implementation Plan: Resume Website Redesign

## Overview

This implementation plan breaks down the redesign of the resume website into discrete, actionable tasks. The approach follows a progressive enhancement strategy: start with core HTML structure and content, add styling and responsive design, then enhance with JavaScript interactivity. Each task builds on previous work to ensure incremental progress.

## Tasks

- [x] 1. Clean up old React code and prepare project structure
  - Remove /build directory and all React-related files
  - Remove node_modules, package.json, and build configuration files
  - Create new directory structure: /css, /js, /images
  - Verify existing assets (/images/me.jpg, /images/favicon/) are preserved
  - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ] 2. Create HTML structure with semantic markup
  - [x] 2.1 Create index.html with basic structure and meta tags
    - Add DOCTYPE, html, head, and body elements
    - Include meta tags for charset, viewport, and description
    - Link favicon assets from /images/favicon/
    - Link to CSS file (css/styles.css)
    - Link to JavaScript file (js/main.js) at end of body
    - _Requirements: 1.1, 3.7, 2.1_
  
  - [x] 2.2 Add navigation component
    - Create nav element with id="navbar"
    - Add navigation links for sections: About, Resume, Projects, Contact
    - Use anchor links (#about, #resume, #projects, #contact)
    - _Requirements: 1.3, 1.5_
  
  - [x] 2.3 Add About section with personal information
    - Create section element with id="about"
    - Add profile image with src="/images/me.jpg" and alt text
    - Add h1 with name "James D. Gardner"
    - Add bio paragraph "Hi, I'm James. I like Automating things."
    - Add email link with mailto:jclimb23@outlook.com
    - Add LinkedIn link with href and target="_blank"
    - _Requirements: 3.1, 3.2, 3.3, 3.5, 3.6_
  
  - [x] 2.4 Add Resume section with education
    - Create section element with id="resume"
    - Add section heading
    - Add education subsection with "WGU graduate"
    - Add placeholders for experience and skills if needed
    - _Requirements: 3.4, 1.5_
  
  - [x] 2.5 Add Projects section
    - Create section element with id="projects"
    - Add section heading
    - Add placeholder for project content
    - _Requirements: 1.5_
  
  - [x] 2.6 Add Contact section
    - Create section element with id="contact"
    - Add section heading
    - Add email and LinkedIn links
    - _Requirements: 1.5_
  
  - [x] 2.7 Add footer element
    - Create footer with copyright or additional info
    - _Requirements: 1.1_

- [ ]* 2.8 Write unit tests for HTML structure
  - Test that all required sections exist in correct order
  - Test that specific content appears (name, email, bio, education)
  - Test that links have correct href attributes
  - Test that favicon links are present
  - _Requirements: 1.1, 1.5, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [x] 3. Checkpoint - Verify HTML structure
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 4. Create CSS styling with responsive design
  - [x] 4.1 Create css/styles.css with reset and base styles
    - Add CSS reset or normalize
    - Define base typography (font-family, font-size, line-height)
    - Define color scheme variables
    - Set box-sizing: border-box for all elements
    - _Requirements: 5.1, 5.2_
  
  - [x] 4.2 Style navigation component
    - Style navbar with fixed positioning or sticky behavior
    - Style navigation links with hover effects
    - Add active state styling for current section
    - Ensure cursor: pointer on navigation links
    - _Requirements: 10.1, 10.2_
  
  - [x] 4.3 Style About section
    - Style profile photo (circular crop, appropriate size)
    - Style name heading
    - Style bio text
    - Style contact links with icons (Font Awesome)
    - Add Font Awesome CDN link to HTML head
    - _Requirements: 5.4_
  
  - [x] 4.4 Style Resume, Projects, and Contact sections
    - Add consistent section padding and spacing
    - Style section headings
    - Style content within each section
    - Ensure visual hierarchy
    - _Requirements: 5.3_
  
  - [x] 4.5 Add mobile-first responsive styles
    - Start with mobile layout (< 768px) as default
    - Add media query for tablet (min-width: 768px)
    - Add media query for desktop (min-width: 1024px)
    - Ensure navigation is accessible on mobile (hamburger menu or visible nav)
    - Test layout at each breakpoint
    - _Requirements: 4.1, 4.2, 4.3, 4.6_

- [ ]* 4.6 Write property test for relative asset paths
  - **Property 2: All asset paths are relative**
  - **Validates: Requirements 2.5**
  - Parse HTML and CSS for all asset references
  - Verify no absolute URLs (http://, https://)
  - Run with minimum 100 iterations

- [ ]* 4.7 Write property test for clickable cursor styles
  - **Property 4: Clickable elements have pointer cursor**
  - **Validates: Requirements 10.2**
  - Collect all clickable elements (a, button)
  - Verify cursor: pointer in computed styles
  - Run with minimum 100 iterations

- [ ]* 4.8 Write unit tests for responsive breakpoints
  - Test mobile layout at viewport < 768px
  - Test tablet layout at viewport 768-1024px
  - Test desktop layout at viewport > 1024px
  - Test navigation visibility on mobile
  - _Requirements: 4.1, 4.2, 4.3, 4.6_

- [x] 5. Checkpoint - Verify styling and responsiveness
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Implement JavaScript interactivity
  - [ ] 6.1 Create js/main.js with smooth scrolling functionality
    - Add event listeners to navigation links
    - Implement smooth scroll to target sections on click
    - Use scrollIntoView with smooth behavior
    - _Requirements: 1.4_
  
  - [ ] 6.2 Implement active navigation highlighting
    - Add scroll event listener
    - Detect which section is currently in viewport
    - Update active class on corresponding navigation item
    - _Requirements: 10.5_
  
  - [ ] 6.3 Add mobile menu toggle (if using hamburger menu)
    - Add click handler for menu toggle button
    - Toggle menu visibility on mobile devices
    - _Requirements: 4.6_

- [ ]* 6.4 Write property test for navigation link scrolling
  - **Property 1: Navigation links scroll to target sections**
  - **Validates: Requirements 1.4**
  - Generate test cases for each navigation link
  - Simulate clicks and verify scroll position
  - Run with minimum 100 iterations

- [ ]* 6.5 Write property test for active navigation updates
  - **Property 5: Active navigation updates on scroll**
  - **Validates: Requirements 10.5**
  - Simulate scroll positions within different sections
  - Verify correct navigation item has active class
  - Run with minimum 100 iterations

- [ ]* 6.6 Write unit tests for interactive elements
  - Test email link uses mailto: protocol
  - Test LinkedIn link has target="_blank"
  - Test navigation hover styles are defined
  - _Requirements: 10.1, 10.3, 10.4_

- [ ] 7. Checkpoint - Verify JavaScript functionality
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 8. Create documentation and verify deployment readiness
  - [ ] 8.1 Create README.md with comprehensive documentation
    - Add project overview and description
    - Document local development setup (Python http.server)
    - Document GitHub Pages deployment steps
    - Document project structure and file organization
    - Add section on how to customize content
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  
  - [ ] 8.2 Verify GitHub Pages compatibility
    - Ensure index.html is at repository root
    - Verify all asset paths are relative
    - Test that site works when served from subdirectory (if needed)
    - _Requirements: 2.4_

- [ ]* 8.3 Write property test for asset loading
  - **Property 3: All assets load successfully**
  - **Validates: Requirements 6.2**
  - Start local HTTP server
  - Collect all asset URLs from HTML and CSS
  - Verify each asset returns HTTP 200
  - Run with minimum 100 iterations

- [ ]* 8.4 Write unit tests for file structure
  - Test that no React files exist (.jsx, React imports)
  - Test that no package.json exists
  - Test that no build config files exist
  - Test that no /build directory exists
  - Test that no node_modules exists
  - Test that only static files exist
  - _Requirements: 2.1, 2.2, 9.1, 9.2, 9.3, 9.4_

- [ ]* 8.5 Write unit tests for documentation
  - Test README.md exists
  - Test README contains local development instructions
  - Test README contains GitHub Pages deployment steps
  - Test README contains project structure documentation
  - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 9. Final validation and testing
  - [ ] 9.1 Test website locally using Python http.server
    - Run `python -m http.server` in project root
    - Open http://localhost:8000 in browser
    - Verify all content displays correctly
    - Verify all links work
    - Verify smooth scrolling works
    - Verify active navigation highlighting works
    - _Requirements: 6.1, 2.3_
  
  - [ ] 9.2 Validate HTML and CSS
    - Run HTML through W3C HTML validator
    - Run CSS through W3C CSS validator
    - Fix any validation errors
    - _Requirements: 2.1_
  
  - [ ] 9.3 Test responsive behavior manually
    - Test on mobile device or browser dev tools (< 768px)
    - Test on tablet or browser dev tools (768-1024px)
    - Test on desktop (> 1024px)
    - Verify layout adapts appropriately at each breakpoint
    - _Requirements: 4.1, 4.2, 4.3_

- [ ] 10. Final checkpoint - Complete implementation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout development
- Property tests validate universal correctness properties with minimum 100 iterations
- Unit tests validate specific examples, structure, and edge cases
- The implementation follows progressive enhancement: HTML → CSS → JavaScript
- All existing assets (/images/me.jpg, /images/favicon/) will be preserved and reused
- The final website will be a single-page static site compatible with GitHub Pages
