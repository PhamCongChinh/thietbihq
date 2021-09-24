import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'

import { useSelector } from "react-redux"

const Header = () => {
    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)
    return (
        <div id="header">
            {/**TOP */}
            <div className="bg-gray-50 pt-1 border px-4 md:px-0">
                <div className="flex mx-auto max-w-6xl justify-between">
                    <Link href="/">
                        <a className="text-sm text-blue-500 font-normal cursor-pointer">Công ty TNHH thương mại và sản xuất HQ</a>
                    </Link>
                    <Link href="/shop/cart">
                        <a>
                            <span className="relative inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 18 18" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span className="absolute top-1 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                    {cartTotalQuantity}
                                </span>
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
            {/**CENTER */}
            <div className="bg-white">
                <div className="mx-auto max-w-6xl justify-items-center grid md:grid-cols-5">
                    <div className="pt-4 md:pt-0 md:col-span-1">
                        <Image src="/images/logo.png" alt="logo" height={130} width={130} />
                    </div>
                    <div className="flex w-full items-center md:col-span-3 p-4 md:p-0">
                        <Script async src="https://cse.google.com/cse.js?cx=13a0dccfea6d6816a"></Script>
                        <div className="w-full">
                            <div className="gcse-searchbox-only"></div>
                        </div>
                    </div>
                    <div className="hidden md:col-span-1 md:flex flex-col justify-center">
                        <div className="py-1">
                            <p>Tư vấn mua hàng</p>
                        </div>
                        <div className="flex">
                            <svg className="h-6 w-6 text-red-500" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />  <path d="M15 7a2 2 0 0 1 2 2" />  <path d="M15 3a6 6 0 0 1 6 6" /></svg>
                            <span className="pl-1 text-red-500 font-semibold text-lg">0965 990 555</span>
                        </div>
                    </div>
                </div>
            </div>
            {/**Navbar */}
            <div className="bg-blue-500">
                <div className="hidden md:flex mx-auto max-w-6xl py-3 text-white font-semibold">
                    <ul className="flex">
                        <li className="pr-5">
                            <Link href="/">
                                <a>Trang chủ</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/gioi-thieu.html">
                                <a>Giới thiệu</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/san-pham.html">
                                <a>Sản phẩm</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/">
                                <a>Tin tức</a>
                            </Link>
                        </li>
                        <li  className="px-5">
                            <Link href="/">
                                <a>Khách hàng</a>
                            </Link>
                        </li>
                        <li  className="px-5">
                            <Link href="/">
                                <a>Nhà sản xuất</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/">
                                <a>Tuyển dụng</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/">
                                <a>Dịch vụ</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/">
                                <a>Liên hệ</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
/**
 * <Link href="/">
                        <a className="pr-5">Trang chủ</a>
                    </Link>
                    <Link href="/gioi-thieu.html">
                        <a className="px-5">Giới thiệu</a>
                    </Link>
                    <Link href="/san-pham.html">
                        <a className="px-5">Sản phẩm</a>
                    </Link>
                    <Link href="/">
                        <a className="px-5">Tin tức</a>
                    </Link>
                    <Link href="/">
                        <a className="px-5">Khách hàng</a>
                    </Link>
                    <Link href="/">
                        <a className="px-5">Nhà sản xuất</a>
                    </Link>
                    <Link href="/">
                        <a className="px-5">Tuyển dụng</a>
                    </Link>
                    <Link href="/">
                        <a className="px-5">Dịch vụ</a>
                    </Link>
                    <Link href="/">
                        <a className="px-5">Liên hệ</a>
                    </Link>
 */