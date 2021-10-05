import Link from 'next/link'
import Layout from '../../components/Layout'
import { getCommon } from '../../lib/q_common'
import { getNews, getNewsDetail } from '../../lib/q_menu'
const News = ({news, news_detail}) => {
    return (
        <>
        <div className="p-4 text-justify text-sm leading-6 text-gray-800" dangerouslySetInnerHTML={{ __html: news.content }}/>
        <div className="p-4 text-justify text-sm leading-6 text-gray-800">
            {news_detail.map(item => (
                <div key={item.id}>
                    <Link href={`/tin-tuc/${item.slug}-${item.id}.html`}>
                        <a className="text-gray-800 text-base">
                            <div>{item.name}</div>
                        </a>
                    </Link>
                    <div className="overflow-hidden h-24 text-sm leading-6 text-gray-600">{item.content}</div>
                </div>
            ))}
        </div>
        </>
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
        },
        revalidate: 10,
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
