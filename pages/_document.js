// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="vi">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="google-site-verification" content="Zdqf3xmxGsaBBUhwI8PeQvEbeEfLSx0S1p_K2c87kA8" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument