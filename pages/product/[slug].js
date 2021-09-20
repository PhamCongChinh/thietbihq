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
		{id: '', name: 'Trang chủ', slug: ''},
        {id: '', name: 'Sản phẩm', slug: '/products'},
        page.props.category,
        page.props.product,
	]
	return (
		<Layout breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Product
