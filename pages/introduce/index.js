import Layout from '../../components/Layout'
import { getIntroduce } from '../../lib/q_menu'
import { getCommon } from '../../lib/q_common'

const Introduce = ({introduce}) => {
    return (
        <div className="p-4 text-justify text-sm leading-6 text-gray-800">
            <div dangerouslySetInnerHTML={{ __html: introduce.content }} />
        </div>
    )
}
export async function getStaticProps(){
    const common = await getCommon()
	const introduce = await getIntroduce()
    return{
        props: {
            common,
			introduce,
        }
    }
}

Introduce.getLayout = function getLayout(page){
    const data = {
		SEO: page.props.introduce,
		breadcrumb: [
            {name: page.props.introduce.name, url: `/${page.props.introduce.slug}.html`}
        ],
		common: page.props.common
	}
    return (
        <Layout data={data}>{page}</Layout>
    )
}

export default Introduce