module.exports = {
    compress: false,
    poweredByHeader: false,
    generateEtags: false,
    async rewrites() {
        return [
            {
                source: '/gioi-thieu.html',
                destination: '/introduce',
            },
            {
                source: '/san-pham.html',
                destination: '/products',
            },
            
            {
                source: '/san-pham/:slug.html',
                destination: '/products/:slug',
            },
            {
                source: '/chi-tiet/:slug.html',
                destination: '/product/:slug',
            },
        ]
    },
}