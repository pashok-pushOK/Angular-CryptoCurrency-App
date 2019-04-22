const rp = require('request-promise');

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        start: 1,
        limit: 5000,
        convert: 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': 'fc5c70b5-3bec-4406-971d-bff5904b92d9'
    },
    json: true,
    gzip: true
};

let cryptoItemsArr = [];

rp(requestOptions).then(response => {
    cryptoItemsArr = response;
}).catch((err) => {
    console.log('API call error:', err.message);
});

module.exports = (router) => {

    router.get('/crypto-items', (req, res) => {
        res.json({success: true, message: 'Test'});
    })

    return router;
};