import React from 'react'
import { getCommon } from '../../lib/q_common'
import Layout from '../../components/Layout'
import { getRecruitment } from '../../lib/q_menu'
const Recruitment = ({recruitment}) => {
    return (
        <div className="p-4 text-justify text-sm leading-6 text-gray-800" dangerouslySetInnerHTML={{ __html: recruitment.content }}/>
    )
}
export async function getStaticProps(){
	const common = await getCommon()
    const recruitment = await getRecruitment()
    return{
        props: {
			common,
            recruitment
        }
    }
}
Recruitment.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.recruitment,
		breadcrumb: [
            {name: page.props.recruitment.name, url: `/${page.props.recruitment.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default Recruitment
