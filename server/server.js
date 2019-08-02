// 'use strict'
require('./config/config')

const express = require('express');
const app = express();

const bodyParser = require('body-parser')
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    const objeto = {
        name : "jose",
        count: 4
    }
    res.json(objeto);
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}` );
});;