import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import { getCategory, getParamsCategory, getProductsByCategory } from '../../lib/query'
import { getCommon } from '../../lib/q_common'

const ProductsByCategory = ({ products, category }) => {
    return (
        <div>
            <div className="px-4 py-3">
                <h1 className="text-xl text-gray-800">{category.name}</h1>
            </div>
            <ProductsList products={products}/>
        </div>
    )
}

export const getStaticPaths = async () => {
    const paths = await getParamsCategory()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }){
    const common = await getCommon()
    const products = await getProductsByCategory(params.slug)
    const category = await getCategory(params.slug)
    return{
        props: {
            common,
            products,
            category,
        }
    }
}
ProductsByCategory.getLayout = function getLayout(page){
    const data = {
		SEO: page.props.category,
		breadcrumb: [
            {name: page.props.category.name, url: `/san-pham/${page.props.category.slug}-${page.props.category.id}.html`}
        ],
		common: page.props.common
	}
	return (
		<Layout data={data}>{page}</Layout>
	)
}
export default ProductsByCategory
