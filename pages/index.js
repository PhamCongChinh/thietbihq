import Layout from '../components/Layout'
import ProductsList from '../components/ProductsList'
import { getHome } from '../lib/q_menu'
import { getCommon } from '../lib/q_common'
import { getProducts } from '../lib/query'

const Home = ({ products }) => {
	return (
		<ProductsList products={products}/>
	)
}

export async function getStaticProps(){
	const common = await getCommon()
	const home = await getHome()
	const products = await getProducts()
    return{
        props: {
			common,
			home,
			products,
        },
    }
}

Home.getLayout = function getLayout(page){
	const data = {
		SEO: page.props.home,
		breadcrumb: '',
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}

export default Home