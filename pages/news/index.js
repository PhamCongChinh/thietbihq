import Link from 'next/link'
import Layout from '../../components/Layout'
import { getCommon } from '../../lib/q_common'
import { getNews, getNewsDetail } from '../../lib/q_menu'
const News = ({news_detail}) => {
    return (
        <div className="p-4 text-justify text-base text-gray-700">
            {news_detail.map(item => (
                <div key={item.id}>
                    <Link href={`/tin-tuc/${item.slug}-${item.id}.html`}>
                        <a className="text-blue-500">
                            <div>{item.name}</div>
                        </a>
                    </Link>
                    <div className="overflow-hidden h-24 text-sm text-gray-600">{item.content}</div>
                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(){
	const common = await getCommon()
	const news = await getNews()
    const news_detail = await getNewsDetail()
    return{
        props: {
			common,
			news,
            news_detail
        }
    }
}

News.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.news,
		breadcrumb: [
            {name: page.props.news.name, url: `/${page.props.news.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default News
