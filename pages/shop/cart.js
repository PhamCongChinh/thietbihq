import React from 'react'
import LayoutDefault from '../../components/LayoutDefault'
const Cart = () => {
    return (
        <div>
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <svg className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="flex justify-center">
                    <p>Không có sản phẩm nào trong giỏ hàng!</p>
                </div>
            </div>
        </div>
    )
}

Cart.getLayout = function getLayout(page) {
    return (
        <LayoutDefault>{page}</LayoutDefault>
    )
}
export default Cart
