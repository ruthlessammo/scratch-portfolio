const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;
const router = require('./config/routes');
const db = require('./config/db');
const dest = `${__dirname}/public`; // added for res.sendFiledem

let mongoUri =  process.env.MONGODB_URI || 'mongodb://localhost/portfolio';
mongoose.connect(mongoUri);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(`${__dirname}/public`));
app.use(router);
app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`)); //added to make (non-existent)hashes work

app.listen(port, () => console.log(`Express is listening on port ${port}`));
