import React from 'react'
import Breadcrumb from './Breadcrumb'
import Footer from './layout/Footer'
import Header from './layout/Header'

import { Provider } from "react-redux"
import store from "../store/store"
import { ToastContainer } from 'react-toastify'
const LayoutDefault = ({ children, breadcrumb }) => {
    return (
        <Provider store={store}>
            <ToastContainer limit={3}/>
            <Header/>
            <Breadcrumb breadcrumb={breadcrumb}/>
            <div className="my-5">
                <main className="max-w-6xl mx-auto">{children}</main>
            </div>
            <Footer/>
        </Provider>
    )
}
export default LayoutDefault
