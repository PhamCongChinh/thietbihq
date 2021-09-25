import UseSWR from "swr";
import axios from "axios";
const fetcher = url => axios.get(url).then(res => res.data)

// Get list categories
export const getCategories = () => {
    try {
        const res = UseSWR(`/api/v1/categories`, fetcher)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
