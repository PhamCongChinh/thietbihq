import { sql_query } from "../../../utils/db";

const handler = async (_, res) => {
    try {
        const results = await sql_query(
            `SELECT * FROM products`
        )
        return res.json(results)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default handler