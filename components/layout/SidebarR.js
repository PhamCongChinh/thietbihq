import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const SidebarR = (props) => {
    const newProducts = props.newProducts
    return (
        <div className="px-4 md:px-0">
            <div className="bg-blue-500 text-center text-sm text-white py-2">
                <p className="font-semibold">Sản phẩm mới</p>
            </div>
            {newProducts ? (
                newProducts.map(item => (
                    <Link key={item.id} href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                        <a>
                            <div className="flex flex-row p-2 border-b border-r border-l cursor-pointer relative">
                                <Image src={`/images/pr/${item.slug}.jpg`} alt={item.name} height={60} width={60} />
                                <p className="px-3 text-sm  text-gray-800">{item.name}</p>
                                <p className="absolute bottom-1 right-1 font-semibold text-white text-xs bg-red-500 px-1.5 py-0.5">Chi tiết</p>
                            </div>
                        </a>
                    </Link>
                ))
            ):('')}
        </div>
    )
}

export default React.memo(SidebarR)
