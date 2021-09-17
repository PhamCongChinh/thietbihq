import React from 'react'
import { getCategories } from '../lib/api'
const Sidebar = () => {
    const categories = getCategories()
    return (
        <div>
            {categories ? (
                categories.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))
            ):('')}
        </div>
    )
}

export default Sidebar
