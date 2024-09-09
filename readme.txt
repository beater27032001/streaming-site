1-Configuração Inicial

npm create vite@latest streaming-site --template react-ts
cd streaming-site
npm install

npm install react-router-dom
npm install @heroicons/react
npm install react-icons


npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Atualize o arquivo tailwind.config.js para incluir os caminhos dos seus arquivos:
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Em seguida, configure o index.css para usar as diretivas do Tailwind:

@tailwind base;
@tailwind components;
@tailwind utilities;

npm install react-slick slick-carousel
