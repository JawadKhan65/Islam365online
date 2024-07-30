// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/proxy/:path*',
                destination: 'http://ec2-52-66-203-7.ap-south-1.compute.amazonaws.com/:path*',
            },
        ];
    },
};

export default nextConfig;
