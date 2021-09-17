import React from 'react'
import Header from './Header'
const LayoutDefault = ({children}) => {
    return (
        <div>
            <Header/>
            <main className="max-w-6xl mx-auto">LayoutDefault{children}</main>
        </div>
    )
}
export default LayoutDefault
