import Script from 'next/script'
import Layout from '../../components/Layout'
import { getCommon } from '../../lib/q_common'
const Search = () => {
    return (
        <div>
            <Script async src="https://cse.google.com/cse.js?cx=13a0dccfea6d6816a"></Script>
            <div className="gcse-searchresults-only"></div>
        </div>
    )
}

export async function getStaticProps(){
	const common = await getCommon()
    return{
        props: {
			common,
        }
    }
}

Search.getLayout = function getLayout(page){
	const data = {
		SEO: {
			meta_title: 'Tìm kiếm',
			meta_description: "Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định",
			meta_keywords: "Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định"
		},
		breadcrumb: [
            {name: 'Tìm kiếm', url: '/search'}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}

export default Search
