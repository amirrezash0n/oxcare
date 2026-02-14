# 🌿 OXCARE - Mental Health Landing Page

![Project Banner](public/images/oxcare-banner.png)

> A modern, responsive landing page for mental health services built with React and TypeScript.

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 📋 Overview

OXCARE is a professional landing page designed for mental health services. It features a clean, calming design with smooth animations and a fully responsive layout that works seamlessly across all devices.

### ✨ Key Features

- 🎨 **Modern UI/UX** - Clean and calming design for mental wellness
- 📱 **Fully Responsive** - Optimized for all screen sizes (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for optimal loading speed
- 🎯 **Smooth Animations** - Scroll animations using AOS library
- 📝 **Modular CSS** - Scoped styling with CSS Modules
- 🧩 **Reusable Components** - Clean component architecture
- 🌐 **Cross-browser** - Works on all modern browsers

## 🛠️ Tech Stack

| Technology  | Version | Purpose           |
| ----------- | ------- | ----------------- |
| React       | 18.3.1  | UI Library        |
| TypeScript  | 5.6.2   | Type Safety       |
| Vite        | 6.0.5   | Build Tool        |
| CSS Modules | -       | Scoped Styling    |
| Swiper      | 11.2.10 | Touch Sliders     |
| AOS         | 2.3.4   | Scroll Animations |
| React Icons | 5.4.0   | Icon Library      |

## 📁 Project Structure

```
oxcare/
├── public/                 # Static assets
│   ├── images/            # Images and icons
│   └── favicon.ico        # Site favicon
├── src/
│   ├── assets/            # Project assets
│   ├── components/        # React components
│   │   ├── CallBack/      # Callback form section
│   │   ├── Feedbacks/     # Testimonials slider
│   │   ├── Footer/        # Footer section
│   │   ├── Header/        # Navigation header
│   │   ├── Hero/          # Hero section
│   │   ├── Services/      # Services grid
│   │   ├── Stats/         # Statistics section
│   │   ├── WhyUs/         # Benefits section
│   │   └── common/        # Reusable components
│   ├── styles/            # Global styles
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── vite-env.d.ts      # Vite types
├── index.html             # HTML template
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── vite.config.ts         # Vite config
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/amirrezash0n/oxcare.git
   cd oxcare
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**

   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 🎨 Component Overview

| Component     | Description                            |
| ------------- | -------------------------------------- |
| **Header**    | Navigation with mobile-responsive menu |
| **Hero**      | Main banner with call-to-action        |
| **Stats**     | Key statistics counter section         |
| **Services**  | Services grid with icons               |
| **Feedbacks** | Testimonials slider with Swiper        |
| **WhyUs**     | Benefits and features section          |
| **CallBack**  | Contact form for appointments          |
| **Footer**    | Site footer with links and info        |

## 📱 Responsive Design

The project is fully responsive with the following breakpoints:

- **Desktop** (>1024px) - Full layout
- **Tablet** (768px - 1024px) - Adjusted grid
- **Mobile** (<768px) - Single column
- **Small Mobile** (<480px) - Optimized spacing

## 🎯 Key Features Explained

### Smooth Animations

```tsx
// AOS animations on scroll
<div data-aos="fade-up" data-aos-delay="200">
  Content animates when scrolled into view
</div>
```

### Touch Sliders

```tsx
// Swiper for testimonials
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
>
  {/* Slides */}
</Swiper>
```

### CSS Modules

```css
/* Scoped styles per component */
.componentName {
  /* Styles only apply to this component */
}
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "aos": "^2.3.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-icons": "^5.4.0",
    "swiper": "^11.2.10"
  },
  "devDependencies": {
    "@types/aos": "^3.0.7",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "~5.6.2",
    "vite": "^6.0.5"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is part of ByteRivals competition and is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Amirreza Shourvarzi** - [@amirrezash0n](https://github.com/amirrezash0n)
- **Nomaan Rigi** - [@nomaan-07](https://github.com/nomaan-07)

## 🙏 Acknowledgments

- Design inspiration from modern healthcare websites
- Icons from React Icons library
- Animations from AOS library
- Sliders from Swiper library

## 📞 Contact

- **Project Link**: [https://github.com/amirrezash0n/oxcare](https://github.com/amirrezash0n/oxcare)
- **Live Demo**: [Coming Soon]

---

<div align="center">
  Made with ❤️ for ByteRivals Competition
  <br />
  © 2025 OXCARE. All rights reserved.
</div>
