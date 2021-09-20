import Link from 'next/link'
import { useRouter } from 'next/router'

const Breadcrumb = ({ breadcrumb }) => {
    const router = useRouter()
    return (
        <div className="bg-white border">
            <div className="max-w-6xl mx-auto px-3 md:px-0">
                {router.pathname === "/"? (""):(
                    <ol className="flex pt-1 pb-2">
                        <li>
                            <Link href="/">
                                <a className="text-sm text-gray-500">Trang chủ</a>
                            </Link>
                        </li>
                        {breadcrumb.map((item, index) => (
                            <li key={index} className="">
                                <Link href={`${item.url}`}>
                                    <a className="text-sm text-gray-500">
                                        <span className="px-2">/</span>
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>
    )
}

export default Breadcrumb
