import Layout from '../components/Layout'
import ProductsList from '../components/ProductsList'
import { getProducts } from '../lib/api'
import { getHome } from '../lib/menu_query'
import { getCategories, getProductsQuery } from '../lib/query'

const Home = () => {
	const products = getProducts()
	return (
		<div>
			{products ? (
				<ProductsList products={products}/>
			):('')}
		</div>
	)
}

export async function getStaticProps(){
	const home = await getHome()
    const categories = await getCategories()
	const products = await getProductsQuery()
    return{
        props: {
			home,
            categories,
			products,
        }
    }
}

Home.getLayout = function getLayout(page){
	const _SEO = page.props.home
	const breadcrumb = ''
	return (
		<Layout _SEO={_SEO} breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Home