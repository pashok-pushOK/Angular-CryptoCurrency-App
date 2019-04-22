const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const port = 80;
const path = require('path');

// routes
const items = require('./routes/items')(router);

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// express static folder
app.use(express.static(__dirname + '/frontend/dist/frontend'));

// cors
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// requests
app.use('/fetchData', items);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/frontend/dist/frontend/index.html'));
});

app.listen(port, () => {
    console.log(`App is listening on ${port} port`);
});