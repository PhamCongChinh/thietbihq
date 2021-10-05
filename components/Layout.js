import Header from './layout/Header'
import Breadcrumb from './Breadcrumb'
import Sidebar from './layout/Sidebar'
import SidebarR from './layout/SidebarR'
import Footer from './layout/Footer'
import SEO from './SEO'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { Provider } from "react-redux"
import store from "../store/store"
import { ToastContainer } from 'react-toastify'

import Script from 'next/script'
import { useEffect } from 'react'
import { GTM_ID, pageview } from '../lib/gtm'

const Layout = ({ children, data }) => {
    const router = useRouter()

    useEffect(() => {
        router.events.on('routeChangeComplete', pageview)
        return () => {
          router.events.off('routeChangeComplete', pageview)
        }
    }, [router.events])

    return (
        <Provider store={store}>
            <div className="bg-gray-50">
                {/* Google Tag Manager - Global base code */}
                <Script
                    id
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer', '${GTM_ID}');
                    `,
                    }}
                />
                <SEO
                    title = {`${data.SEO.meta_title}`}
                    siteTitle="https://thietbihq.com"
                    description={`${data.SEO.meta_description}`}
                    keywords={`${data.SEO.meta_keywords}`}
                />
                <Header/>
                <Breadcrumb breadcrumb={data.breadcrumb}/>
                <div className="grid md:grid-cols-5 max-w-6xl mx-auto my-5 bg-white">
                    <div className="md:col-span-1"><Sidebar {...data.common}/></div>
                    {router.pathname === '/' ? (
                        <>
                            <div className="md:col-span-4">
                                <div className="grid md:grid-cols-1 p-4 md:p-0">
                                    <Image src="/images/banner.jpg" alt="Thiết bị HQ" height={320} width={960}/>
                                </div>
                                <div className="grid md:grid-cols-4">
                                    <main className="md:col-span-3">{children}</main>
                                    <div className="md:col-span-1"><SidebarR {...data.common}/></div>
                                </div>
                            </div>
                        </>
                    ):(
                        <>
                            <main className="md:col-span-3">{children}</main>
                            <div className="md:col-span-1"><SidebarR {...data.common}/></div>
                        </>
                    )}
                </div>
                <Footer/>
            </div>
            <ToastContainer limit={3}/>
        </Provider>
    )
}

export default Layout
