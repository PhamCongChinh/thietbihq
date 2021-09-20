import React from 'react'
import Link from 'next/link'
const SidebarR = (props) => {
    const newProducts = props.newProducts
    return (
        <div>
            <div className="bg-blue-400 text-center text-sm text-white py-2">
                <p className="font-semibold">Sản phẩm mới</p>
            </div>
            {newProducts ? (
                newProducts.map(item => (
                    <div key={item.id} className="py-1.5 px-3 border-b border-l border-r font-semibold text-sm cursor-pointer hover:bg-gray-50">
                        <Link href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                            <a>{item.name}</a>
                        </Link>
                    </div>
                ))
            ):('')}
        </div>
    )
}

export default React.memo(SidebarR)
