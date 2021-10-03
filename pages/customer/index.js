import React from 'react'
import { getCommon } from '../../lib/q_common'
import Layout from '../../components/Layout'
import { getCustomer } from '../../lib/q_menu'
const Customer = ({customer}) => {
    return (
        <div className="p-4 text-justify text-sm leading-6 text-gray-800" dangerouslySetInnerHTML={{ __html: customer.content }}/>
    )
}
export async function getStaticProps(){
	const common = await getCommon()
    const customer = await getCustomer()
    return{
        props: {
			common,
            customer
        }
    }
}
Customer.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.customer,
		breadcrumb: [
            {name: page.props.customer.name, url: `/${page.props.customer.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default Customer
