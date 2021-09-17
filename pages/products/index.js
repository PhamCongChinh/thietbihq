import React from 'react'
import { sql_query } from '../../utils/db'
import Layout from '../../components/Layout'
import ProductsList from '../../components/ProductsList'
const Products = ({ products }) => {
    return (
        <div>
            <ProductsList products={products}/>
        </div>
    )
}

export async function getStaticProps(){
    const results = await sql_query(
        `SELECT * FROM products`
    )
    const products = Object.values(JSON.parse(JSON.stringify(results)))
    return{
        props: {
            products
        }
    }
}

Products.getLayout = function getLayout(page){
	return (
		<Layout>{page}</Layout>
	)
}
export default Products
