// jest.setup.js
// In case of need the useFetch() importation
import 'whatwg-fetch'; // <-- pnpm add whatwg-fetch

require('dotenv').config({
    path: '.env.test'
})

jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}))
