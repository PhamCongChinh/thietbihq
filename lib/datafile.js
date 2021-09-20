import fs from 'fs'
import path from 'path'

const dataDirectory = path.join(process.cwd(), 'data')

export function getDataFile(){
    const fileNames = fs.readdirSync(dataDirectory)
    const menuData = fileNames.map(fileName => {
        const id = fileName.replace(/\.json$/, '')

        // Read markdown file as string
        const fullPath = path.join(dataDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        return {
            id,
            fileContents
        }
    })
    return menuData
}