import 'tailwindcss/tailwind.css'
import '../public/styles.css'
import 'react-toastify/dist/ReactToastify.css'

const MyApp = ({ Component, pageProps }) => {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout (
        <Component {...pageProps} />
    )
}

export default MyApp