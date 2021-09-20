import React from 'react'
import Link from 'next/link'
const Sidebar = (props) => {
    const categories = props.categories
    const sellingProducts = props.sellingProducts
    return (
        <div>
            <div className="bg-blue-500 text-center text-sm text-white py-2">
                <p className="font-semibold">Danh mục sản phẩm</p>
            </div>
            {categories ? (
                categories.map(item => (
                    <div key={item.id} className="py-1.5 px-3 border-b border-l border-r font-semibold text-sm cursor-pointer hover:bg-gray-50">
                        <Link href={`/san-pham/${item.slug}-${item.id}.html`}>
                            <a>{item.name}</a>
                        </Link>
                    </div>
                ))
            ):('')}
            <div className="bg-blue-500 text-center text-sm text-white py-2">
                <p className="font-semibold">Bán chạy nhất</p>
            </div>
            {sellingProducts ? (
                sellingProducts.map(item => (
                    <div key={item.id}>
                        <Link href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                            <a>{item.name}</a>
                        </Link>
                    </div>
                ))
            ):('')}
        </div>
    )
}

export default React.memo(Sidebar)