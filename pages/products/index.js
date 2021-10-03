import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import { getProduct } from '../../lib/q_menu'
import { getProducts } from '../../lib/query'
import { getCommon } from '../../lib/q_common'

const Products = ({products}) => {
    return (
        <>
            <div className="px-4 py-3">
                <h1 className="text-xl text-gray-800">Sản phẩm</h1>
            </div>
            <ProductsList products={products}/>
        </>
        
    )
}

export async function getStaticProps(){
    const common = await getCommon()
    const product = await getProduct()
    const products = await getProducts()
    return{
        props: {
            common,
            product,
            products,
        }
    }
}

Products.getLayout = function getLayout(page){
    const data = {
		SEO: page.props.product,
		breadcrumb: [
            {name: page.props.product.name, url: `/${page.props.product.slug}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}

export default Products
