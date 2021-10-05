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

            {
                source: '/tin-tuc.html',
                destination: '/news',
            },
            {
                source: '/tin-tuc/:slug.html',
                destination: '/news/:slug',
            },

            {
                source: '/khach-hang.html',
                destination: '/customer',
            },
            {
                source: '/nha-san-xuat.html',
                destination: '/producer',
            },
            {
                source: '/tuyen-dung.html',
                destination: '/recruitment',
            },
            {
                source: '/dich-vu.html',
                destination: '/service',
            },
            {
                source: '/lien-he.html',
                destination: '/contact',
            },
            {
                source: '/search',
                destination: '/search',
            },
        ]
    },
}