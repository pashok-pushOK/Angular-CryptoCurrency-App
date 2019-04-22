const rp = require('request-promise');

const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    // uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1',
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

module.exports = (router) => {

    router.get('/cryptoItems', (req, res) => {
        rp(requestOptions)
            .then(response => {
                cryptoItemsArr = response;
                res.json({success: true, message: 'Fetched data!', data: cryptoItemsArr});
            })
            .catch((err) => {
                res.json({success: false, message: `Error: ${err}`});
            });
    });

    return router;
};