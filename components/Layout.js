import React from 'react'
import Header from './Header'
const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main className="max-w-6xl mx-auto">{children}</main>
        </div>
    )
}

export default Layout
