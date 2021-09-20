import React from 'react'
import Footer from './layout/Footer'
import Header from './layout/Header'
const LayoutDefault = ({children}) => {
    return (
        <div>
            <Header/>
            <main className="max-w-6xl mx-auto">{children}</main>
            <Footer/>
        </div>
    )
}
export default LayoutDefault
