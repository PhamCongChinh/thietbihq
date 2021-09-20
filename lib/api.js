import UseSWR from "swr";
import axios from "axios";
const fetcher = url => axios.get(url).then(res => res.data)

export const getHome = () => {
    try {
        const res = UseSWR(`/api/v1/home`, fetcher)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getCommon = () => {
    try {
        const res = UseSWR(`/api/v1/common`, fetcher)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

// Get list categories
export const getCategories = () => {
    try {
        const res = UseSWR(`/api/v1/categories`, fetcher)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

export const getProducts = () => {
    try {
        const res = UseSWR(`/api/v1/products`, fetcher)
        return res.data
    } catch (error) {
        console.log(error)
    }
}

