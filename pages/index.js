import Layout from '../components/Layout'
import ProductsList from '../components/ProductsList'
import SEO from '../components/SEO'
import { getProducts } from '../lib/api'
import { getCategories, getProductsQuery } from '../lib/query'

const Home = () => {
	const products = getProducts()
	//if(!products) return <div>Loading...</div>
	return (
		<div>
			<SEO
				title="Thiết bị HQ - Thiết bị cơ khí, ngành may mặc, công nghiệp Nam Định"
				siteTitle="https://thietbihq.com"
				description="Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định"
			/>
			{products ? (
				<ProductsList products={products}/>
			):('')}
			
		</div>
	)
}

export async function getStaticProps(){
    const categories = await getCategories()
	const products = await getProductsQuery()
    return{
        props: {
            categories,
			products,
        }
    }
}

Home.getLayout = function getLayout(page){
	const breadcrumb = [
		{id: '', name: '', slug: ''},
	]
	return (
		<Layout breadcrumb={breadcrumb}>{page}</Layout>
	)
}
export default Home