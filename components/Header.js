import React from 'react'
import Link from 'next/link'
const Header = () => {
    return (
        <div className="bg-gray-100">
            <div className="flex mx-auto max-w-6xl py-2">
                <Link href="/">
                    <a className="pr-3">Trang chủ</a>
                </Link>
                <Link href="/products">
                    <a className="px-3">Sản phẩm</a>
                </Link>
            </div>
        </div>
    )
}

export default Header
