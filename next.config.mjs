/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/todo-app",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
};

export default nextConfig;
