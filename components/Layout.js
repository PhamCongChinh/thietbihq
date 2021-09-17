import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="grid grid-cols-5 max-w-6xl mx-auto">
                <div className="col-span-1"><Sidebar/></div>
                <main className="col-span-4">Layout{children}</main>
            </div>
        </div>
    )
}

export default Layout
