const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
    const env = process.env.ENV || 'production';

    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
            NEXT_PUBLIC_ENV: 'development',
            API_URL: 'http://localhost:1337'
        }
    }

    return {
        env: {
            NEXT_PUBLIC_ENV: env,
            API_URL: (env == 'production') ?
                'https://polar-sierra-17664.herokuapp.com' : 
                'https://limitless-eyrie-65717.herokuapp.com'
        }
    }
}