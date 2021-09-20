import React from 'react'
import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'
import { getCategoryByProduct, getParamsProduct, getProduct } from '../../lib/query'

const Product = ({ product, category }) => {
    return (
        <div>
            <ProductDetail product={product}/>
        </div>
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
    const product = await getProduct(params.slug)
    const category = await getCategoryByProduct(params.slug)
    return{
        props: {
            product,
            category,
        }
    }
}

Product.getLayout = function getLayout(page){
    const breadcrumb = [
        {name: page.props.category.name, url: `/san-pham/${page.props.category.slug}-${page.props.category.id}.html`},
        {name: page.props.product.name, url: `/chi-tiet/${page.props.product.slug}-${page.props.product.id}.html`},
	]
	return (
		<Layout breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Product
