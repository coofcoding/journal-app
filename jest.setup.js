// jest.setup.js
// In case of need the useFetch() importation
import 'whatwg-fetch'; // <-- pnpm add whatwg-fetch
import { getEnvironments } from './src/helpers/getEnvironments';

require('dotenv').config({
    path: '.env.test'
})

jest.mock('./src/helpers/getEnvironments', () => {
    getEnvironments: () => ({ ...process.env })
})