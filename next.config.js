/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  
  trailingSlash: true,
  
   exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/api/hello': { page: '/api/hello' }, // server-side page
    };
  
};
