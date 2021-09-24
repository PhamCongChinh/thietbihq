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
    const _SEO = {
		meta_title: 'Thiết bị HQ - Thiết bị cơ khí, ngành may mặc, công nghiệp Nam Định',
		meta_description: "Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định",
		meta_keywords: "Cơ khí, điện nước, sơn Epoxy, thảm cầu lông, văn phòng, may mặc, khu công nghiệp Nam Định"
	}
    const breadcrumb = [
        {name: page.props.category.name, url: `/san-pham/${page.props.category.slug}-${page.props.category.id}.html`},
        {name: page.props.product.name, url: `/chi-tiet/${page.props.product.slug}-${page.props.product.id}.html`},
	]
	return (
		<Layout _SEO={_SEO} breadcrumb={breadcrumb}>{page}</Layout>
	)
}

export default Product
