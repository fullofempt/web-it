/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Генерирует статические файлы
    images: {
        unoptimized: true,  // Отключает оптимизацию изображений
    },
};

export default nextConfig;
