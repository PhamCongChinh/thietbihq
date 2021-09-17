const { 
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants')

module.exports = (phase) => {
    // Dev mode bất kể giá trị STAGING
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // Build được dùng
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // Build được dùng
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

    console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)

    const env = {
        TITLE : (() => {
            if(isDev) return 'DEVELOPMENT'
            if(isProd) return 'PRODUCTION'
            if(isStaging) return 'STAGING'
        })()
    }

    /*const rewrites = async () => {
        return [
            {
                source: '/san-pham.html',
                destination: '/products',
            }
        ]
    }*/

    // Runtime config

    const etag = () => {
        return {
            generateEtags: false,
        }
    }
    const generateBuildId = async() => {
        return 'HFtdnKMJ6sujqWmBNbFJs'
    }
    return {
        env,
        //rewrites,
        etag,
        generateBuildId
    }
}