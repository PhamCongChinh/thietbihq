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


//News
export const getNews = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM news`
        )
        const news = JSON.parse(JSON.stringify(results))
        return news[0]
    } catch (error) {
        console.log(error)
    }
}
export const getNewsDetail = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM news_detail`
        )
        const news_detail = JSON.parse(JSON.stringify(results))
        return news_detail
    } catch (error) {
        console.log(error)
    }
}
export const getParamsNewsDetail = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM news_detail as n`
        )
        const news_detail = Object.values(JSON.parse(JSON.stringify(results)))
        return news_detail.map(item => ({
            params: {
                slug: `${item.slug}-${item.id}`
            }
        }))
    } catch (error) {
        console.log(error)
    }
}
export const getNewsDetailById = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const results = await sql_query(
            `SELECT * FROM news_detail as n WHERE n.id = ${id}`
        )
        const news_detail = Object.values(JSON.parse(JSON.stringify(results)))
        return news_detail[0]
    } catch (error) {
        console.log(error)
    }
}