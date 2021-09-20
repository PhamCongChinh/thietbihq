import React from 'react'
import Link from 'next/link'
const Breadcrumb = ({ breadcrumb }) => {
    return (
        <div className="bg-blue-50">
            <div className="max-w-6xl mx-auto">
                <ol className="flex">
                    {breadcrumb.map((item, index) => (
                        <li key={index} className="px-3">
                            <Link href="/">
                                <a className="text-sm text-gray-500">{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default Breadcrumb
