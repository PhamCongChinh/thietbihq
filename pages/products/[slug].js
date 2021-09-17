import React from 'react'
import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
import { sql_query } from '../../utils/db'
const ProductsByCategory = ({ products }) => {
    return (
        <div>
            <ProductsList products={products}/>
        </div>
    )
}

export const getStaticPaths = async () => {
    const results = await sql_query(
        `SELECT * FROM categories`
    )
    const categories = Object.values(JSON.parse(JSON.stringify(results)))
    const paths = categories.map(item => ({
        params: {
            slug: `${item.slug}-${item.id}`
        }
    }))
    return {
        paths,
        fallback: false, // Neu khong co trong props thi chuyen sang 404
    }
}

export async function getStaticProps({ params }){
    const arrSlug = params.slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    const results = await sql_query(
        `SELECT * FROM products WHERE products.category_id = ${id}`
    )
    const products = Object.values(JSON.parse(JSON.stringify(results)))
    return{
        props: {
            products
        }
    }
}
ProductsByCategory.getLayout = function getLayout(page){
	return (
		<Layout>{page}</Layout>
	)
}
export default ProductsByCategory
