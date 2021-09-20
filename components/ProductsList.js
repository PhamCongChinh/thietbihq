import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProductsList = ({ products }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3">
            {products.map(item => (
                <div key={item.id} className="relative hover:shadow-md p-3">
                    <Link href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                        <a>
                            <div className="flex justify-center md:h-60 md:w-full">
                                <Image src={'/images/vang-anh.jpeg'} alt={item.name} height={240} width={200}/>
                            </div>
                            <div className="py-2">{item.name}</div>
                            <div className="text-red-500 font-semibold">Liên hệ</div>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default ProductsList
