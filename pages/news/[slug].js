import React from 'react'
import Layout from '../../components/Layout'
import { getCommon } from '../../lib/q_common'
import { getNewsDetailById, getParamsNewsDetail } from '../../lib/q_menu'

const NewsDetail = ({news_detail_by_id}) => {
    return (
        <div className="p-4 text-justify text-base text-gray-700">
            {news_detail_by_id.content}
        </div>
    )
}
export const getStaticPaths = async () => {
    const paths = await getParamsNewsDetail()
    return {
        paths,
        fallback: false,
    }
}
export async function getStaticProps({ params }){
    const common = await getCommon()
    const news_detail_by_id = await getNewsDetailById(params.slug)
    return{
        props: {
            common,
            news_detail_by_id,
        }
    }
}
NewsDetail.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.news_detail_by_id,
		breadcrumb: [
            {name: "Tin tức", url: `/tin-tuc.html`},
            {name: page.props.news_detail_by_id.name, url: `/tin-tuc/${page.props.news_detail_by_id.slug}-${page.props.news_detail_by_id.id}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default NewsDetail
