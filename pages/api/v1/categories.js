import { sql_query } from "../../../utils/db"
const handler = async (_, res) => {
    try {
        const results = await sql_query(
            `SELECT c.id, c.name, c.slug FROM categories as c ORDER BY c.id DESC`
        )
        return res.json(results)
    } catch (error) {
        console.log(error)
    }
}
export default handler