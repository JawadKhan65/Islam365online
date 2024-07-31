// next.config.mjs
/** @type {import('next').NextConfig} */
// next config object with rewrites proxy policy
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/proxy/:path*', // api schema
                destination: 'http://ec2-52-66-203-7.ap-south-1.compute.amazonaws.com/:path*',
            },
        ];
    },
};

export default nextConfig;
