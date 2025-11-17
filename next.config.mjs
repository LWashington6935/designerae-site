// next.config.mjs
const repo = "designerae-site"; // your GitHub repo name

// Build for GitHub Pages only when we *explicitly* ask for it
// e.g. npm run build:pages sets NEXT_PUBLIC_DEPLOY_TARGET=pages
const isPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === "pages";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // --- GitHub Pages (static) vs Vercel (SSR) switches ---
  ...(isPages
    ? {
        // Static export for GitHub Pages
        output: "export",
        trailingSlash: true,
        basePath: `/${repo}`,
        assetPrefix: `/${repo}/`,
        images: {
          // no server image optimizer on static hosting
          unoptimized: true,
          remotePatterns: [
            { protocol: "https", hostname: "images-cdn.ecwid.com" },
            { protocol: "https", hostname: "images.ecwid.com" },
            { protocol: "https", hostname: "app.ecwid.com" },
            { protocol: "https", hostname: "ecwid-platform.s3.amazonaws.com" },
            { protocol: "https", hostname: "d2j6dbq0eux0bg.cloudfront.net" },
          ],
        },
      }
    : {
        // Normal Vercel/Node build (no export, no basePath)
        images: {
          // Vercel can optimize remote images; keep patterns so next/image works
          remotePatterns: [
            { protocol: "https", hostname: "images-cdn.ecwid.com" },
            { protocol: "https", hostname: "images.ecwid.com" },
            { protocol: "https", hostname: "app.ecwid.com" },
            { protocol: "https", hostname: "ecwid-platform.s3.amazonaws.com" },
            { protocol: "https", hostname: "d2j6dbq0eux0bg.cloudfront.net" },
          ],
        },
      }),
};

export default nextConfig;
