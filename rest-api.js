const fetch = require('node-fetch');

const getApi = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    return response;
}

module.exports = getApi;
