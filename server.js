// dependencies & variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
// const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();

// middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// user routes
app.use('/api', require('./routes/api'));

// catch all
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

// listener
const port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log(`Express app running on port ${port}`)
});