/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/chat',
        destination: 'https://gemini-snnj.onrender.com/api/chat',
      },
    ];
  },
};

export default nextConfig;