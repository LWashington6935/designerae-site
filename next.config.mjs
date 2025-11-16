// next.config.mjs
const repo = "designerae-site"; // <-- set to your GitHub repo name
const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages (static hosting)
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",

  // next/image: use original files (no server optimizer on static hosting)
  images: {
    unoptimized: true,
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
