/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'via.placeholder.com'
      },
      {
        hostname: 'github.com'
      },
      {
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  }
}

export default nextConfig
