import React from 'react'
import { getCommon } from '../../lib/q_common'
import Layout from '../../components/Layout'
import { getService } from '../../lib/q_menu'
const Service = ({service}) => {
    return (
        <div className="p-4 text-justify text-sm leading-6 text-gray-800" dangerouslySetInnerHTML={{ __html: service.content }}/>
    )
}
export async function getStaticProps(){
	const common = await getCommon()
    const service = await getService()
    return{
        props: {
			common,
            service
        }
    }
}
Service.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.service,
		breadcrumb: [
            {name: page.props.service.name, url: `/${page.props.service.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default Service
