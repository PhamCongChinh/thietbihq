import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import { getProducts } from '../../lib/api'
import { getProduct } from '../../lib/menu_query'

const Products = () => {
    const products = getProducts()
    if(!products) return <div>Loading..</div>
    return (
        <div>
            <ProductsList products={products}/>
        </div>
    )
}

export async function getStaticProps(){
    const product = await getProduct()
    return{
        props: {
            product,
        }
    }
}

Products.getLayout = function getLayout(page){
    const _SEO = page.props.product
    const breadcrumb = [
        page.props.product
	]
	return (
		<Layout _SEO={_SEO} breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Products
