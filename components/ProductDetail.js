import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
import Lightbox from 'react-image-lightbox'

const ProductDetail = ({ product }) => {
    const [isOpen, setIsOpen] = useState(false)

    const item = {
        id: product.id,
        name: product.name,
        slug: product.slug
    }
    const dispatch = useDispatch()
    return (
        <div className="text-gray-700 leading-6">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex justify-center md:col-span-1 p-4">
                    <div className="flex flex-col">
                        <div className="cursor-pointer max-h-80 w-full" onClick={() => setIsOpen( true )}>
                            <Image src={`/images/pr/${product.slug}.jpg`} alt={product.name} height={300} width={300}/>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={`/images/pr/${product.slug}.jpg`}
                        onCloseRequest={() => setIsOpen(false)}
                    />
                )}
                <div className="md:col-span-1 p-4">
                    <div className="border-b pb-3">
                        <h1 className="text-2xl">{product.name}</h1>
                    </div>
                    <div className="pt-3">
                        <p className="text-sm">Mã hàng : {product.code}</p>
                        <p className="text-sm">Giá : <span className="font-semibold text-red-500">Liên hệ</span></p>
                    </div>
                    <div className="pt-3">
                        <p className="text-sm">Bảo hành : 12 tháng</p>
                        <p className="text-sm">Giao hàng</p>
                        <ul className="text-sm">
                            <li className="">- Giao hàng</li>
                            <li>- Thời gian làm việc từ <span className="text-blue-500">8h30</span> đến <span className="text-blue-500">18h30</span> hằng ngày</li>
                        </ul>
                    </div>
                    <div className="pt-3">
                        <p className="text-sm">Liên hệ mua hàng:</p>
                        <p className="font-semibold text-sm text-gray-700">Nam Định : <span className="text-red-500">0965 990 555</span></p>
                        <p className="font-semibold text-sm text-gray-700">Hà Nội : <span className="text-red-500">0979 342 589</span></p>
                    </div>

                    <div className="flex py-4">
                        <div className="flex-1 pr-1">
                            <button onClick={() => dispatch(addToCart(item))} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Thêm giỏ hàng
                            </button>
                        </div>
                        <div className="flex-1 pl-1">
                            <Link href="/shop/cart">
                                <a>
                                <button onClick={() => dispatch(addToCart(item))} className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Mua ngay
                                </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="border-b pb-2">
                    <p className="text-gray-600 font-semibold">Thông tin chi tiết</p>
                </div>
                <div className="py-4 text-gray-800 text-sm leading-6" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
        </div>
    )
}

export default ProductDetail
