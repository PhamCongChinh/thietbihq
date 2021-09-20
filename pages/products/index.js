import React from 'react'
import Layout from '../../components/Layout'
import { getProducts } from '../../lib/api'
import ProductsList from '../../components/ProductsList'

const Products = () => {
    const products = getProducts()
    if(!products) return <div>Loading..</div>
    return (
        <div>
            <ProductsList products={products}/>
        </div>
    )
}

Products.getLayout = function getLayout(page){
    const breadcrumb = [
        {name: 'Sản phẩm', url: '/san-pham.html'}
	]
	return (
		<Layout breadcrumb={breadcrumb}>{page}</Layout>
	)
}
export default Products
