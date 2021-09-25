import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'
import { getCategoryByProduct, getParamsProduct, getProduct } from '../../lib/query'
import { getCommon } from '../../lib/q_common'

const Product = ({ product }) => {
    return (
        <ProductDetail product={product}/>
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
    return{
        props: {
            common,
            product,
            category,
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
