import React from 'react'
import Footer from './Footer'
import Header from './Header'
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
