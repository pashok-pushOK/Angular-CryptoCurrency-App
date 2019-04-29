const rp = require('request-promise');

const requestOptionsItems = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
        start: 1,
        limit: 10,
        convert: 'USD'
    },
    headers: {
        'X-CMC_PRO_API_KEY': 'fc5c70b5-3bec-4406-971d-bff5904b92d9'
    },
    json: true,
    gzip: true
};

const requestOptionsItem = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
    headers: {
        'X-CMC_PRO_API_KEY': 'fc5c70b5-3bec-4406-971d-bff5904b92d9'
    },
    qs: {
        id: ''
    },
    json: true,
    gzip: true
};

let cryptoItemsArr = [];

module.exports = (router) => {

    // get all items
    router.get('/cryptoItems', (req, res) => {
        rp(requestOptionsItems)
            .then(response => {
                cryptoItemsArr = response;
                res.json({success: true, message: 'Fetched data!', data: cryptoItemsArr});
            })
            .catch((err) => {
                res.json({success: false, message: `Error: ${err}`});
            });
    });

    // get single item by id
    router.get('/cryptoItem/:name/:symbol/:id', (req, res) => {
        requestOptionsItem.qs.id = `${req.params.id}`;

        rp(requestOptionsItem)
            .then(response => {
                res.json({success: true, message: `You got ${req.params.name} !`, data: response})
            })
            .catch((err) => {
                res.json({success: false, message: `Error: ${err}`})
            });
    });

    return router;
};