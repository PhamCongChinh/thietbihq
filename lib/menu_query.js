import { sql_query } from "../utils/db"

//Home
export const getHome = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM home`
        )
        const home = JSON.parse(JSON.stringify(results))
        return home[0]
    } catch (error) {
        console.log(error)
    }
}
//Introduce
export const getIntroduce = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM introduce`
        )
        const introduce = JSON.parse(JSON.stringify(results))
        return introduce[0]
    } catch (error) {
        console.log(error)
    }
}
//Product
export const getProduct = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM product`
        )
        const product = JSON.parse(JSON.stringify(results))
        return product[0]
    } catch (error) {
        console.log(error)
    }
}