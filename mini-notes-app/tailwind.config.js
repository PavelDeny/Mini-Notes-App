// tailwind.config.js — конфиг для настройки TailwindCSS
// content — указывает, в каких файлах искать классы Tailwind
// theme — позволяет расширять стандартную тему (цвета, шрифты и т.д.)
// plugins — массив для подключения дополнительных плагинов Tailwind

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
