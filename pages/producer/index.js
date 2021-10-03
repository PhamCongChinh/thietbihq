import React from 'react'
import { getCommon } from '../../lib/q_common'
import Layout from '../../components/Layout'
import { getProducer } from '../../lib/q_menu'
const Producer = ({producer}) => {
    return (
        <div className="p-4 text-justify text-sm leading-6 text-gray-800" dangerouslySetInnerHTML={{ __html: producer.content }}/>
    )
}
export async function getStaticProps(){
	const common = await getCommon()
    const producer = await getProducer()
    return{
        props: {
			common,
            producer
        }
    }
}
Producer.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.producer,
		breadcrumb: [
            {name: page.props.producer.name, url: `/${page.props.producer.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default Producer
