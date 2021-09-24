import { sql_query } from "../utils/db"
//import { UrlHandle } from '../utils/urlHandle'

//Get list categories
export const getCategories = async () => {
    try {
        const results = await sql_query(
            `SELECT * FROM categories as c ORDER BY c.id DESC`
        )
        const categories = Object.values(JSON.parse(JSON.stringify(results)))
        return categories
    } catch (error) {
        console.log(error)
    }
}
//Get list products
export const getProductsQuery = async () => {
    try {
        const results = await sql_query(
            `SELECT p.id, p.name, p.slug FROM products as p`
        )
        const products = Object.values(JSON.parse(JSON.stringify(results)))
        return products
    } catch (error) {
        console.log(error)
    }
}

export const getParamsCategory = async () => {
    try {
        const results = await sql_query(
            `SELECT c.slug, c.id FROM categories as c`
        )
        const categories = Object.values(JSON.parse(JSON.stringify(results)))
        return categories.map(item => ({
            params: {
                slug: `${item.slug}-${item.id}`
            }
        }))
    } catch (error) {
        console.log(error)
    }
}

// Get products by category
export const getProductsByCategory = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const results = await sql_query(
            `SELECT p.id, p.name, p.slug, p.image FROM products as p WHERE p.category_id = ${id}`
        )
        const products = Object.values(JSON.parse(JSON.stringify(results)))
        return products
    } catch (error) {
        console.log(error)
    }
}

// Get params by product
export const getParamsProduct = async () => {
    try {
        const results = await sql_query(
            `SELECT p.slug, p.id FROM products as p`
        )
        const products = Object.values(JSON.parse(JSON.stringify(results)))
        return products.map(item => ({
            params: {
                slug: `${item.slug}-${item.id}`
            }
        }))
    } catch (error) {
        console.log(error)
    }
}
export const getProduct = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const results = await sql_query(
            `SELECT * FROM products as p WHERE p.id = ${id}`
        )
        const product = Object.values(JSON.parse(JSON.stringify(results)))
        return product[0]
    } catch (error) {
        console.log(error)
    }
}


// Get Category
export const getCategory = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const results = await sql_query(
            `SELECT * FROM categories as p WHERE p.id = ${id}`
        )
        const product = Object.values(JSON.parse(JSON.stringify(results)))
        return product[0]
    } catch (error) {
        console.log(error)
    }
}

export const getCategoryByProduct = async (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    try {
        const results = await sql_query(
            `SELECT c.id, c.name, c.slug FROM categories as c, products as p WHERE c.id = p.category_id AND p.id = ${id}`
        )
        const category = Object.values(JSON.parse(JSON.stringify(results)))
        return category[0]
    } catch (error) {
        console.log(error)
    }
}