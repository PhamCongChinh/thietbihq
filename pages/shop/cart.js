import React from 'react'
import LayoutDefault from '../../components/LayoutDefault'
const Cart = () => {
    return (
        <div>
            <h1>Gio hang</h1>
        </div>
    )
}

Cart.getLayout = function getLayout(page){
    return (
        <LayoutDefault>{page}</LayoutDefault>
    )
}
export default Cart
