import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProductDetail = ({ product }) => {
    return (
        <div className="px-5">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="md:col-span-1">
                    <Image src={`/images/vang-anh.jpeg`} alt={product.name} height={240} width={240}/>
                </div>
                <div className="md:col-span-1">
                    <div className="border-b pb-2">
                        <h1 className="text-2xl">{product.name}</h1>
                    </div>
                    <div className="pt-2">
                        <p className="">Mã hàng : {product.code}</p>
                        <p>Giá : <span className="font-semibold text-red-500">Liên hệ</span></p>
                    </div>
                    <div className="pt-2">
                        <p>Bảo hành : 12 tháng</p>
                        <p>Giao hàng</p>
                        <ul className="text-sm">
                            <li className="">- Giao hàng</li>
                            <li>- Thời gian làm việc từ 8h30 đến 18h30 hằng ngày</li>
                        </ul>
                    </div>
                    <div className="pt-2">
                        <p className="">Liên hệ mua hàng:</p>
                        <p className="font-semibold text-sm text-gray-700">Nam Định : <span className="text-red-500">0965 990 555</span></p>
                        <p className="font-semibold text-sm text-gray-700">Hà Nội : <span className="text-red-500">0979 342 589</span></p>
                    </div>

                    <div className="flex py-4">
                        <div className="flex-1 pr-1">
                            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Thêm giỏ hàng
                            </button>
                        </div>
                        <div className="flex-1 pl-1">
                            <Link href="/shop/cart">
                                <a>
                                <button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Mua ngay
                                </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="border-b pb-2">
                    <p className="text-gray-700 font-semibold">Thông tin chi tiết</p>
                </div>
                <div className="py-4" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
        </div>
    )
}

export default ProductDetail
