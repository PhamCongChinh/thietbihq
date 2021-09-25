export const UrlHandle = (slug) => {
    const arrSlug = slug.split('-')
    const id = arrSlug[arrSlug.length - 1]
    return id
}