/** @type {import('next').NextConfig} */
const nextConfig = {
//   output: 'export', // Статический экспорт
  trailingSlash: true, // Добавляет / к URL (решает 404 при прямых переходах)
  images: {
    unoptimized: true, // Отключает встроенную оптимизацию изображений
  },

};

export default nextConfig;