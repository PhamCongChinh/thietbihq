import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_NAME,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS
    }
})

export async function sql_query(query_string, values = []){
    try {
        const result = await db.query(query_string, values)
        await db.end()
        return result
    } catch (error) {
        throw Error(error.message)
    }
}