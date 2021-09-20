import { sql_query } from "../../../utils/db";

const data = {
    categories : {},
    products : {},
}

const handler = async (_, res) => {
    try {
        const categories = await sql_query(
            `SELECT * FROM categories`
        )
        const products = await sql_query(
            `SELECT * FROM products`
        )
        data.categories = categories
        data.products = products
        return res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default handler