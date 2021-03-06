import { sql_query } from "../utils/db"

const data = {
    categories: {},
    newProducts: {},
    sellingProducts: {},
}

export const getCommon = async () => {
    try {
        const categories = await sql_query(
            `SELECT c.id, c.name, c.slug FROM categories as c ORDER BY c.id DESC`
        )
        const newProducts = await sql_query(
            `SELECT p.name, p.slug, p.id FROM products as p ORDER BY p.id DESC LIMIT 10`
        )
        const sellingProducts = await sql_query(
            `SELECT p.name, p.slug, p.id FROM products as p LIMIT 5`
        )
        data.categories = categories
        data.newProducts = newProducts
        data.sellingProducts = sellingProducts
        const json_data = JSON.parse(JSON.stringify(data))
        return json_data
    } catch (error) {
        console.log(error)
    }
}