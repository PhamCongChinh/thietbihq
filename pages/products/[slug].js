import React from 'react'
import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import { getCategory, getParamsCategory, getProductsByCategory } from '../../lib/query'

const ProductsByCategory = ({ products, category }) => {
    return (
        <div>
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
    const products = await getProductsByCategory(params.slug)
    const category = await getCategory(params.slug)
    return{
        props: {
            products,
            category
        }
    }
}
ProductsByCategory.getLayout = function getLayout(page){
    const breadcrumb = [
		{id: '', name: 'Trang chủ', slug: ''},
        {id: '', name: 'Sản phẩm', slug: '/products'},
        page.props.category
	]
	return (
		<Layout breadcrumb={breadcrumb}>{page}</Layout>
	)
}
export default ProductsByCategory
