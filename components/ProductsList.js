import React from 'react'
import Image from 'next/image'
const ProductsList = ({ products }) => {
    return (
        <div className="grid grid-cols-3">
            {products.map(item => (
                <div key={item.id}>
                    <Image src={'/images/vang-anh.jpeg'} alt={item.name} height={100} width={100}/>
                    <div>{item.name}</div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList
