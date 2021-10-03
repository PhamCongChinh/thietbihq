import React from 'react'
import LayoutDefault from '../../components/LayoutDefault'
const Success = () => {
    return (
        <>
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        </div>
        <div className="flex justify-center">
            <p className="text-xl text-green-500">Bạn đã gửi đơn hàng thành công!</p>
        </div>
        <div className="flex justify-center">
            <p className="text-xl text-green-500">Cám ơn bạn luôn tin tưởng chúng tôi</p>
        </div>
        </>
    )
}

Success.getLayout = function getLayout(page) {
    const breadcrumb = [
        {name: 'Thành công', url: '/shop/success'}
    ]
    return (
        <LayoutDefault breadcrumb={breadcrumb}>{page}</LayoutDefault>
    )
}
export default Success