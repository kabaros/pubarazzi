const axios = require('axios');

export const getPubs = async() => {
    const { data } = await axios.get('/pubs');
    return data;
};

export const getPub = async(pubId) => {
    const { data } = await axios.get(`/pubs/${pubId}`);
    return data;
};