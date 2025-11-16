/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Allow Ecwid/CDN product images
    remotePatterns: [
      { protocol: "https", hostname: "images-cdn.ecwid.com" },
      { protocol: "https", hostname: "images.ecwid.com" },
      { protocol: "https", hostname: "app.ecwid.com" },
      { protocol: "https", hostname: "ecwid-platform.s3.amazonaws.com" },
      { protocol: "https", hostname: "d2j6dbq0eux0bg.cloudfront.net" },
    ],
  },
};

export default nextConfig;