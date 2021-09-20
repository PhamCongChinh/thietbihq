import { sql_query } from "../../../utils/db";

const data = {
    categories: {},
    newProducts: {},
    sellingProducts: {},
}

const handler = async (_, res) => {
    try {
        const categories = await sql_query(
            `SELECT c.id, c.name, c.slug FROM categories as c`
        )
        const newProducts = await sql_query(
            `SELECT p.name, p.slug, p.image, p.id FROM products as p ORDER BY p.id DESC LIMIT 10`
        )
        const sellingProducts = await sql_query(
            `SELECT p.name, p.slug, p.image, p.id FROM products as p LIMIT 5`
        )
        
        data.categories = categories
        data.newProducts = newProducts
        data.sellingProducts = sellingProducts

        return res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default handler