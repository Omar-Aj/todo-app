/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/todo-app",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
