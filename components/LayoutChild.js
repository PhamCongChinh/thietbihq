import React from 'react'
import Sidebar from './Sidebar'

const LayoutChild = ({ children }) => {
    return (
        <div className="grid md:grid-cols-5">
            <div className="bg-gray-50 md:col-span-1"><Sidebar/></div>
            <main className="md:col-span-4">{children}</main>
        </div>
    )
}

export default LayoutChild
