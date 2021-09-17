import React from 'react'
import Layout from '../components/Layout'
import LayoutChild from '../components/LayoutChild'
import { sql_query } from '../utils/db'
const Products = ({ products }) => {
    return (
        <div>
            {products.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    )
}

export async function getStaticProps(context){
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
        <Layout>
            <LayoutChild>{page}</LayoutChild>
        </Layout>
    )
}

export default Products
