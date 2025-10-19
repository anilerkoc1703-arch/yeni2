/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🔹 TypeScript hataları build'i durdurmasın
  typescript: {
    ignoreBuildErrors: true,
  },

  // 🔹 Statik HTML export modunu aktif eder
  output: 'export',

  // 🔹 Resimleri optimize etmeden kopyalar (GoDaddy gibi hostlarda şart)
  images: {
    unoptimized: true,
  },

  // 🔹 /index.html yapısını düzgün oluşturur
  trailingSlash: true,
};

export default nextConfig;
