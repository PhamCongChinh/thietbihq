import React from 'react'
import { getCategories } from '../lib/api'
import Link from 'next/link'
const Sidebar = () => {
    const categories = getCategories()
    return (
        <div>
            {categories ? (
                categories.map(item => (
                    <div key={item.id}>
                        <Link href={`/products/${item.slug}-${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </div>
                ))
            ):('')}
        </div>
    )
}

export default Sidebar
