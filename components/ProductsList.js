import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
const ProductsList = ({ products }) => {
    const [pageNumber, setPageNumber] = useState(0)
    const productsPerPage = 18
    const pagesVisited = pageNumber * productsPerPage
    const pageCount = Math.ceil(products.length / productsPerPage)
    const changePage = ({ selected }) => {
        setPageNumber(selected)
        window.scrollTo(0, 0)
    }
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 p-4 md:p-0">
                {products.slice(pagesVisited, pagesVisited + productsPerPage).map(item => (
                    <div key={item.id} className="relative p-3">
                        <Link href={`/chi-tiet/${item.slug}-${item.id}.html`}>
                            <a>
                                <div className="flex justify-center md:h-56 md:w-full">
                                    <Image src={`/images/pr/${item.slug}.jpg`} alt={item.name} height={240} width={240} />
                                </div>
                                <div className="py-2 text-gray-800 text-sm font-semibold">{item.name}</div>
                                <div className="text-red-500 font-semibold text-sm">Liên hệ</div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex justify-center py-4">
                {products.length !== 0 ? (
                <ReactPaginate
                    previousLabel={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    }
                    nextLabel={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    }
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'pagination'}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={3}
                    activeClassName={'active'}
                    disabledClassName={"disabled"}
                />
            ):('')}
            </div>
        </>
    )
}
export default ProductsList
