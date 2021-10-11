import Head from 'next/head'
const SEO = ({ description, title, siteTitle, keywords }) => {
    return (
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta name="google-site-verification" content="Zdqf3xmxGsaBBUhwI8PeQvEbeEfLSx0S1p_K2c87kA8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta charSet="utf-8" />
            <title>{`${title}`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:image" content="https://thietbihq.com/images/logo.png" />
            <meta property="og:url" content={siteTitle} />
            <meta name="geo.region" content="VN-67" />
            <meta name="geo.placename" content="Nam Định" />
            <meta name="geo.position" content="20.271224;106.16299" />
            <meta name="ICBM" content="20.271224, 106.16299" />
        </Head>
    )
}
export default SEO