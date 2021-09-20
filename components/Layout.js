import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import SidebarR from './SidebarR'
import Footer from './Footer'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { getCommon } from '../lib/api'
import Breadcrumb from './Breadcrumb'

const Layout = ({ children, breadcrumb }) => {
    const router = useRouter()
    const common = getCommon()
    //if(!common) return <div>Loading...</div>
    return (
        <div>
            <Header/>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <div className="grid md:grid-cols-5 max-w-6xl mx-auto py-5">
                <div className="md:col-span-1"><Sidebar {...common}/></div>
                {router.pathname === '/' ? (
                    <>
                        <div className="md:col-span-4">
                            <div className="grid md:grid-cols-1">
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
    )
}

export default Layout
