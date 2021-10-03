import React from 'react'
import { getCommon } from '../../lib/q_common'
import Layout from '../../components/Layout'
import { getContact } from '../../lib/q_menu'
const Contact = ({contact}) => {
    return (
        <div className="p-4 text-justify text-sm leading-6 text-gray-800" dangerouslySetInnerHTML={{ __html: contact.content }}/>
    )
}
export async function getStaticProps(){
	const common = await getCommon()
    const contact = await getContact()
    return{
        props: {
			common,
            contact
        }
    }
}
Contact.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.contact,
		breadcrumb: [
            {name: page.props.contact.name, url: `/${page.props.contact.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default Contact
