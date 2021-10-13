import React from 'react'
import Breadcrumb from './Breadcrumb'
import Footer from './layout/Footer'
import Header from './layout/Header'

import { Provider } from "react-redux"
import store from "../store/store"
import { ToastContainer } from 'react-toastify'
import SEO from './SEO'
const LayoutDefault = ({ children, data }) => {
    return (
        <Provider store={store}>
            <SEO
                title = {`${data.SEO.meta_title}`}
                siteTitle="https://thietbihq.com"
                description={`${data.SEO.meta_description}`}
                keywords={`${data.SEO.meta_keywords}`}
            />
            <ToastContainer limit={3}/>
            <Header/>
            <Breadcrumb breadcrumb={data.breadcrumb}/>
            <div className="max-w-6xl mx-auto py-5 px-4 md:px-0">
                <main>{children}</main>
            </div>
            <Footer/>
        </Provider>
    )
}
export default LayoutDefault
