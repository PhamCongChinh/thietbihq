import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import LayoutDefault from '../../components/LayoutDefault'
import Image from 'next/image'
import Link from 'next/link'
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../features/cart/cartSlice'
const Cart = () => {
    const carts = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    return (
        <div className="">
            {carts.length === 0 ? (
                <div className="flex flex-col my-20">
                    <div className="flex justify-center">
                        <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className="flex justify-center">
                        <p>Không có sản phẩm nào trong giỏ hàng!</p>
                    </div>
                </div>
            ):(
                <>
                    {carts.map(item => (
                        <div key={item.id} className="grid border-b py-2 md:grid-cols-10">
                            <div className="pt-1 md:col-span-1">
                                <Image src={`/images/pr/${item.image}`} alt={item.name} height={70} width={70} />
                            </div>
                            <div className="flex items-center py-1 md:col-span-6">
                                <p className="">{item.name}</p>
                            </div>
                            <div className="flex items-center py-1 md:col-span-2">
                                <button onClick={() => dispatch(decrementQuantity(item))} className="hover:bg-blue-500 text-gray-400 font-bold py-1 px-2 border">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                                    </svg>
                                </button>
                                <div className="py-1 px-4 border">{item.cartQuantity}</div>
                                    <button onClick={() => dispatch(incrementQuantity(item))} className="hover:bg-blue-500 text-gray-400 font-bold py-1 px-2 border">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                            </div>
                            <div className="flex items-center py-1 md:col-span-1 md:justify-center">
                                <button onClick={() => dispatch(removeFromCart(item))} >
                                    <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="max-w-6xl mx-auto flex justify-between py-5 px-4 md:px-0">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Link href="/san-pham">Mua tiếp</Link>
                        </button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <Link href="/shop/checkout">Đặt hàng</Link>
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

Cart.getLayout = function getLayout(page) {
    const breadcrumb = [
        {name: 'Giỏ hàng', url: '/shop/cart'}
    ]
    return (
        <LayoutDefault breadcrumb={breadcrumb}>{page}</LayoutDefault>
    )
}
export default Cart
