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

// cors
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.get('/home', items);

app.listen(port, () => {
    console.log(`App is listening on ${port} port`);
});