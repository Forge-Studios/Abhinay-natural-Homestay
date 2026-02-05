/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "v40aqx8muaadwx3x.public.blob.vercel-storage.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
