
const envConfig = { 
    production: {
        endpoint: 'https://pokeapi.co/api/v2/pokemon',
        limit: 10
    },
    development: {
        endpoint: 'https://pokeapi.co/api/v2/pokemon',
        limit: 10
    }
};

export { envConfig };