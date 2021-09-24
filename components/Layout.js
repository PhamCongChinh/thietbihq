import React from 'react'
import Header from './layout/Header'
import Breadcrumb from './Breadcrumb'
import Sidebar from './layout/Sidebar'
import SidebarR from './layout/SidebarR'
import Footer from './layout/Footer'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getCommon } from '../lib/api'
import SEO from './SEO'

import { Provider } from "react-redux"
import store from "../store/store"
import { ToastContainer } from 'react-toastify'
const Layout = ({ children, breadcrumb, _SEO }) => {
    const router = useRouter()
    const common = getCommon()
    return (
        <Provider store={store}>
            <ToastContainer limit={3}/>
            <div className="bg-gray-50">
                <SEO
                    title = {`${_SEO.meta_title}`}
                    siteTitle="https://thietbihq.com"
                    description={`${_SEO.meta_description}`}
                    keywords={`${_SEO.meta_keywords}`}
                />
                <Header/>
                <Breadcrumb breadcrumb={breadcrumb}/>
                <div className="grid md:grid-cols-5 max-w-6xl mx-auto my-5 bg-white">
                    <div className="md:col-span-1"><Sidebar {...common}/></div>
                    {router.pathname === '/' ? (
                        <>
                            <div className="md:col-span-4">
                                <div className="grid md:grid-cols-1 p-4 md:p-0">
                                    <Image src="/images/banner.jpg" alt="Thiết bị HQ" height={320} width={960}/>
                                </div>
                                <div className="grid md:grid-cols-4">
                                    <main className="md:col-span-3">{children}</main>
                                    <div className="md:col-span-1"><SidebarR {...common}/></div>
                                </div>
                            </div>
                        </>
                    ):(
                        <>
                            <main className="md:col-span-3">{children}</main>
                            <div className="md:col-span-1"><SidebarR {...common}/></div>
                        </>
                    )}
                </div>
                <Footer/>
            </div>
        </Provider>
    )
}

export default Layout
