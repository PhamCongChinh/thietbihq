import 'tailwindcss/tailwind.css'
import '../public/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-image-lightbox/style.css'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'

const MyApp = ({ Component, pageProps }) => {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-K5GSNQW' });
    }, [])
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout (
        <Component {...pageProps} />
    )
}

export default MyApp