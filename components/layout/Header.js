import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import { useSelector } from "react-redux"
import { getCategories } from '../../lib/api'
const Header = () => {
    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity)
    const categories = getCategories()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div id="header">
            {/** Open Sidebar */}
            <div
                onClick={() => setIsSidebarOpen(false)}
                className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${isSidebarOpen ? "block" : "hidden"}`}
            />
            <div
                className={`fixed bg-white inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0  lg:translate-x-0 lg:static lg:inset-0 md:hidden ${isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"}`}
            >
                <div className="flex flex-col items-start text-lg text-gray-700">
                    <Link href="/">
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Trang chủ</button>
                        </a>
                    </Link>
                    <Link href="/gioi-thieu.html">
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Giới thiệu</button>
                        </a>
                    </Link>
                    <button className="pt-3 pl-6 w-full flex justify-between" onClick={() => setIsOpen(true)}>
                        <div>Sản phẩm</div>
                        <div>
                            <svg className="h-7 w-8 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="6 9 12 15 18 9" /></svg>
                        </div>
                    </button>
                    <div className={`bg-gray-50 w-full ${isOpen ? "block" : "hidden"}`}>
						{categories?.map(item => (
							<div key={item.id} className="pt-1">
								<Link href={`/san-pham/${item.slug}-${item.id}.html`}>
									<a className="text-base text-gray-600 pl-6 cursor-pointer" onClick={() => setIsSidebarOpen(false)}>{item.name}</a>
								</Link>
							</div>
						))}
					</div>
                    <Link href="/tin-tuc.html" className="" >
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Tin tức</button>
                        </a>
                    </Link>
                    <Link href="/khach-hang.html" className="">
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Khách hàng</button>
                        </a>
                    </Link>
                    <Link href="/nha-san-xuat.html" className="">
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Nhà sản xuất</button>
                        </a>
                    </Link>
                    <Link href="/tuyen-dung.html" className="">
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Tuyển dụng</button>
                        </a>
                    </Link>
                    <Link href="/dich-vu.html" className="">
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Dịch vụ</button>
                        </a>
                    </Link>
                    <Link href="/lien-he.html" className="" >
                        <a>
                            <button className="pt-3 px-6" onClick={() => setIsSidebarOpen(false)}>Liên hệ</button>
                        </a>
                    </Link>
                </div>
            </div>
            {/**TOP */}
            <div className="w-full fixed z-10 bg-gray-50 pt-1 border px-4 md:px-0">
                <div className="flex mx-auto max-w-6xl justify-between">
                    {/**Tab */}
                    <div className="md:hidden flex cursor-pointer" onClick={() => setIsSidebarOpen(true)}>
                        <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
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
            <div className="bg-white pt-8">
                <div className="mx-auto max-w-6xl justify-items-center grid md:grid-cols-5">
                    <div className="pt-4 md:pt-0 md:col-span-1">
                        <Image src="/images/logo.png" alt="logo" height={130} width={130} />
                    </div>
                    <div className="flex w-full items-center md:col-span-3 p-4 md:p-0">
                        <div className="w-full">
                            <Script async src="https://cse.google.com/cse.js?cx=13a0dccfea6d6816a"></Script>
                            <div className="gcse-searchbox-only" data-resultsurl="https://thietbihq.com/search"></div>
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
                            <Link href="/tin-tuc.html">
                                <a>Tin tức</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/khach-hang.html">
                                <a>Khách hàng</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/nha-san-xuat.html">
                                <a>Nhà sản xuất</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/tuyen-dung.html">
                                <a>Tuyển dụng</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/dich-vu.html">
                                <a>Dịch vụ</a>
                            </Link>
                        </li>
                        <li className="px-5">
                            <Link href="/lien-he.html">
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