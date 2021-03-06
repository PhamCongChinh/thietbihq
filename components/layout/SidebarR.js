import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const SidebarR = (props) => {
    const newProducts = props.newProducts
    return (
        <div className="px-4 md:px-0">
            <div className="bg-gray-100 text-center text-sm text-gray-600 py-2">
                <p className="font-semibold">Sản phẩm mới</p>
            </div>
            {newProducts ? (
                newProducts.map(item => (
                    <Link key={item.id} href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                        <a>
                            <div className="grid grid-cols-4 p-2 border-b border-r border-l cursor-pointer relative">
                                <div className="col-span-1">
                                    <Image src={`/images/pr/${item.slug}.jpg`} alt={item.name} height={60} width={60} />
                                </div>
                                <div className="col-span-3">
                                    <p className="px-3 text-sm  text-gray-800">{item.name}</p>
                                    <p className="absolute bottom-1 right-1 font-semibold text-white text-xs bg-red-500 px-1.5 py-0.5">Chi tiết</p>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))
            ):('')}
        </div>
    )
}

export default React.memo(SidebarR)
