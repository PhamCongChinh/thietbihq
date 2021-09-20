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
            category,
        }
    }
}
ProductsByCategory.getLayout = function getLayout(page){
    const _SEO = page.props.category
    const {id, name, slug} = page.props.category
    const breadcrumb = [
        {name: name, url: `/san-pham/${slug}-${id}.html`}
	]
    
	return (
		<Layout breadcrumb={breadcrumb} _SEO={_SEO}>{page}</Layout>
	)
}
export default ProductsByCategory
