import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Sidebar = (props) => {
    const categories = props.categories
    const sellingProducts = props.sellingProducts
    return (
        <div className="hidden md:grid">
            <div className="bg-gray-100 text-center text-sm text-gray-600 py-2">
                <p className="font-semibold">Danh mục sản phẩm</p>
            </div>
            {categories ? (
                categories.map(item => (
                    <div key={item.id} className="py-1.5 px-3 border-b border-l border-r text-800 text-sm cursor-pointer hover:bg-gray-50">
                        <Link href={`/san-pham/${item.slug}-${item.id}.html`}>
                            <a>{item.name}</a>
                        </Link>
                    </div>
                ))
            ) : ('')}
            <div className="py-1"></div>
            <div className="bg-gray-100 text-center text-sm text-gray-600 py-2">
                <p className="font-semibold">Bán chạy nhất</p>
            </div>
            {sellingProducts ? (
                sellingProducts.map(item => (
                    <Link key={item.id} href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                        <a>
                            <div className="grid grid-cols-4 p-2 border-b border-r border-l cursor-pointer relative">
                                <div className="col-span-1">
                                    <Image src={`/images/pr/${item.slug}.jpg`} alt={item.name} height={60} width={60} />
                                </div>
                                <div className="col-span-3">
                                    <p className="px-3 text-sm text-gray-800">{item.name}</p>
                                    <p className="absolute bottom-1 right-1 font-semibold text-white text-xs bg-red-500 px-1.5 py-0.5">Chi tiết</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))
            ) : ('')}
        </div>
    )
}

export default React.memo(Sidebar)