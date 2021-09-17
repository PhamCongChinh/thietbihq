import UseSWR from "swr";
const fetcher = (url) => fetch(url).then((res) => res.json());
export const getCategories = () => {
    try {
        const res = UseSWR(`/api/v1/categories`, fetcher)
        return res.data
    } catch (error) {
        console.log(error)
    }
} 