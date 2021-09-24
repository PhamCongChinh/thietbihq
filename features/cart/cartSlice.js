import { createSlice } from '@reduxjs/toolkit'
import { toast, Slide } from 'react-toastify'

const initialState = {
    cartItems: typeof window !== 'undefined' && JSON.parse(localStorage.getItem("cart")) || [],
    cartTotalQuantity: typeof window !== 'undefined' && JSON.parse(localStorage.getItem("tot")) || 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
            const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id) // Tim index product
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`${action.payload.name} đã được thêm`,{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    transition: Slide,
                })
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`${action.payload.name} thêm thành công`,{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    transition: Slide,
                })
            }
            state.cartTotalQuantity++
            localStorage.setItem("tot", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        incrementQuantity(state, action){
            const item = state.cartItems.find((item) => item.id === action.payload.id)
            item.cartQuantity++
            toast.info(`${action.payload.name} đã được thêm`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                transition: Slide
            })
            state.cartTotalQuantity++
            localStorage.setItem("tot", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        decrementQuantity(state, action){
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            if(item.cartQuantity === 1){
                const index = state.cartItems.findIndex((item) => item.id === action.payload.id) //Tim index cua item
                state.cartItems.splice(index, 1) // Xoa khoi danh sach
            }else{
                item.cartQuantity--
                toast.info(`${action.payload.name} đã cập nhật`,{
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    transition: Slide
                })
            }
            state.cartTotalQuantity--
            localStorage.setItem("tot", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action){
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id)
            state.cartTotalQuantity = state.cartTotalQuantity - state.cartItems[itemIndex].cartQuantity
            state.cartItems.splice(itemIndex, 1)
            toast.info(`${action.payload.name} đã xóa`,{
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                transition: Slide
            })
            localStorage.setItem("tot", JSON.stringify(state.cartTotalQuantity))
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },
        clearCart(state){
            localStorage.removeItem('tot')
            localStorage.removeItem('cart')
            state.cartItems = []
            state.cartTotalQuantity = 0
        }
    },
})
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart
} = cartSlice.actions
export default cartSlice.reducer