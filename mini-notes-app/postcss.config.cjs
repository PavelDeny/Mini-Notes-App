/*
  postcss.config.cjs — конфиг для PostCSS
  Здесь подключаются плагины для обработки CSS (Tailwind, autoprefixer)
  Обычно менять не нужно, если не требуется особая обработка стилей
*/
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
  ignoreFiles: ["postcss.config.cjs"],
};
