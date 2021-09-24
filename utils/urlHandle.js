export const UrlHandle = (url) => {
    const urlArray = url.split('-').join('.').split('.')
    const id = urlArray[urlArray.length-2]
    return id
}