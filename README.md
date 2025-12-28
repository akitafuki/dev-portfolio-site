# Modern Developer Portfolio

A sleek, responsive, and performant developer portfolio built with React 19, TypeScript, and Tailwind CSS 4.

## 🚀 Features

- **Responsive Design:** Optimized for all screen sizes from mobile to desktop.
- **Project Showcases:** Detailed cards for projects with image support and external links.
- **Skills Section:** Categorized technical skills using high-quality icons.
- **Smooth Animations:** Powered by Framer Motion for a polished user experience.
- **SEO Optimized:** Metadata and Open Graph tags ready for social sharing.
- **Dockerized:** Ready for containerized deployment with Nginx.

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS 4, Framer Motion
- **Icons:** Lucide React, Simple Icons
- **Deployment:** Docker, Nginx

## 📦 Getting Started

### Prerequisites

- Node.js (v22 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/akitafuki/dev-portfolio-site.git
   cd dev-portfolio-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create a production build:
```bash
npm run build
```
The output will be in the `dist/` directory.

## 🐳 Docker Deployment

You can run the portfolio using Docker:

1. Build the image:
   ```bash
   docker build -t portfolio-site .
   ```

2. Run the container:
   ```bash
   docker run -d -p 8080:80 portfolio-site
   ```
The site will be available at `http://localhost:8080`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).