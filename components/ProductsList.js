import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProductsList = ({ products }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 p-4 md:p-0">
            {products.map(item => (
                <div key={item.id} className="relative p-3">
                    <Link href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                        <a>
                            <div className="flex justify-center md:h-56 md:w-full">
                                <Image src={`/images/pr/${item.slug}.jpg`} alt={item.name} height={240} width={240}/>
                            </div>
                            <div className="py-2 text-gray-800 text-sm font-semibold">{item.name}</div>
                            <div className="text-red-500 font-semibold text-sm">Liên hệ</div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default ProductsList
