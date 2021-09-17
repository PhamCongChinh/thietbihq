import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
    return (
        <div id="header">
            {/**TOP */}
            <div className="bg-gray-50">
                <div className="flex mx-auto max-w-6xl justify-between">
                    <Link href="/">
                        <a>Cong ty TNHH thuong mai va san xuat HQ</a>
                    </Link>
                    <Link href="/shop/cart">
                        <a>Gio hang</a>
                    </Link>
                </div>
            </div>
            {/**CENTER */}
            <div className="">
                <div className="mx-auto max-w-6xl justify-items-center grid md:grid-cols-5">
                    <div className="md:col-span-1">
                        <Image src="/images/logo.png" alt="logo" height={130} width={130}/>
                    </div>
                    <div className="md:col-span-3">b</div>
                    <div className="md:col-span-1">c</div>
                </div>
            </div>
            {/**Navbar */}
            <div className="bg-gray-100">
                <div className="flex mx-auto max-w-6xl py-2">
                    <Link href="/">
                        <a className="pr-3">Trang chủ</a>
                    </Link>
                    <Link href="/products">
                        <a className="px-3">Tin tức</a>
                    </Link>
                    <Link href="/products">
                        <a className="px-3">Sản phẩm</a>
                    </Link>
                    <Link href="/products">
                        <a className="px-3">Dịch vụ</a>
                    </Link>
                    <Link href="/products">
                        <a className="px-3">Nhà sản xuất</a>
                    </Link>
                    <Link href="/products">
                        <a className="px-3">Liên hệ</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
