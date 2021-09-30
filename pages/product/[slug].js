import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'
import ProductsList from '../../components/ProductsList'
import { getCategoryByProduct, getParamsProduct, getProduct, getRelatedProducts } from '../../lib/query'
import { getCommon } from '../../lib/q_common'

const Product = ({ product, relatedProducts }) => {
    return (
        <>
        <ProductDetail product={product}/>
        <div className="px-4">
            <div className="text-base font-semibold text-gray-700 py-3 border-b">
                <p>Sản phẩm tương tự</p>
            </div>
        </div>
        <ProductsList products={relatedProducts}/>
        </>
    )
}

export const getStaticPaths = async () => {
    const paths = await getParamsProduct()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }){
    const common = await getCommon()
    const product = await getProduct(params.slug)
    const category = await getCategoryByProduct(params.slug)
    const relatedProducts = await getRelatedProducts(category.id)
    return{
        props: {
            common,
            product,
            category,
            relatedProducts,
        }
    }
}

Product.getLayout = function getLayout(page){
    const data = {
		SEO: page.props.product,
		breadcrumb: [
            {name: page.props.category.name, url: `/san-pham/${page.props.category.slug}-${page.props.category.id}.html`},
            {name: page.props.product.name, url: `/chi-tiet/${page.props.product.slug}-${page.props.product.id}.html`},
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}

export default Product
