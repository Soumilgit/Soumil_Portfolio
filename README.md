# Soumil Mukhopadhyay | Personal Portfolio

A modern, interactive portfolio website showcasing my skills, projects, and experience as a software engineer. Built with cutting-edge web technologies featuring 3D elements, smooth animations and responsive design.

## Features 

- **3D Computer Model** - Interactive Three.js scene
- **Scrambled Text Animation** - Dynamic text effects
- **Hover & Expand Tech Skills** - Interactive technology showcase
- **Project Showcase** - Animated project cards with demo and GitHub repository links
- **Responsive Design** - Works on all device sizes
- **Smooth Animations** - Framer Motion transitions
- **Dual Mode Aesthetic** - Easy-on-the-eyes design
- **Theme-Aware Assets** - Assets switch with light and dark mode
- **Starry Background** - Particle-like, with **3** hooks utilized

## Technologies Used

### Frontend
- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **React Three Fiber** - Three.js for React

### Backend & Deployment
- **Vite** - Build tool
- **Vercel** - Deployment platform
- **Python** - Preprocesses theme-aware visual assets

## Sections 

1. **Hero** - Introduction with animated text, resume and info cards
2. **About** - Overview
3. **Work** - Experience timeline
4. **Open Source** - Merged PRs and contributions
5. **Heatmap** - GitHub contribution heatmap with side chevrons for small devices
6. **Projects** - Featured work
7. **Tech** - Categorized tech stack
8. **Contact** - 3D computer and contact form

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Soumilgit/Soumil_Portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Soumil_Portfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Customization

To personalize this portfolio:

1. Update personal information & work, skillset etc. details in `src/constants/index.js`
2. Replace 3D model in `public/desktop_pc/`
3. Adjust colors in `tailwind.config.cjs`, `src/index.css` and `src/styles.js`
4. Add your own flavour in existing files under folders `Marquees`, `svg`, `utils` etc.

## Recent Updates

 - **Dual-Theme Support (Light & Dark)**: Full implementation of light and dark mode toggles with customized CSS themes. Light mode includes a custom grayscale-processed aurora background and white-bg versions of images.
 - **Asset Preprocessing Script**: Python tool generates the light-mode aurora and other assets with contrast-aware grayscale mapping.
 - **Theme-Aware Media Assets**: Visuals across the portfolio load matching light/dark assets.
 - **ESM & SSR Interop Optimization**: Resolved production-minified React Error #130 crashes by introducing robust interop checks to handle double-default wrapped CommonJS libraries (`react-fast-marquee` and `react-github-calendar`) in ESM/Vite environments.
 - **Section Flow Synced**: Navigation follows the current order: About, Work, OSS, Heatmap, Projects, Tech, and Contact.
 - **Replacing GitHub icon in Projects with buttons for demo & repo**: Replaced the GitHub repository link - containing icon under Projects with 2 buttons each for demo & GitHub repo links with their respective icons.
 - **GitHub Activity Heatmap Layout & Indicators**: Restored standard horizontal overflow scrolling showing the full year's activity. Added viewport-triggered indicators (`>>` and `<<`) that blink and fade after 3 seconds on scroll entry, with the scrollbar hidden across all devices.
 - **Resume Cache Busting**: Appended dynamic timestamp parameters to the resume URL to prevent aggressive browser caching across devices.
  - **Fixed a couple of vulnerabilities**: Resolved uncaught crash / prototype write & fflate DDoS vulnerabilities by updating versions of relevant packages.

## Performance

- Optimized 3D assets
- Lazy loading components
- Efficient animations
- Responsive image handling

## License

This project is licensed under the [MIT License](https://github.com/Soumilgit/Soumil_Portfolio/blob/main/LICENSE).

## Connect with Me

- [GitHub](https://github.com/Soumilgit)
- [LinkedIn](https://www.linkedin.com/in/soumilm30/)
- [X](https://x.com/SoumilMukh6476)
- [Instagram](https://www.instagram.com/soumil_m.exe/)
