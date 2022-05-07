/**
 * THis file is a part of Starton Hackaton Projet
 * 
 * @author Tibo Pendino
 * @copyright 2022 - Starton Hackaton Projet. All rights reserved
 */

const express = require('express');
const dotenv = require('dotenv');
const https = require('https');
const axios = require('axios');
const helmet = require('helmet');
const app = express();
// const router = require('./routes')

dotenv.config({path: './config/.env'});

const STARTON_API_KEY = process.env.STARTON_API_KEY;
const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.use(helmet());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', ((req, res) => {
    res.status(200).send({
        date: new Date(),
        status: "Up"
    });
}));

app.get('/nft', ((req, res) => {
    console.log(req.body.id);
    res.status(201).send({
        status: "NFT Created"
    });
}));

app.post('/nft', ((req, res) => {
    console.log(req.body.id);
    res.status(201).send({
        status: "NFT Created"
    });
}));

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.info(`Starton Hackaton Project API is listening on: ${HOST}:${PORT}`);
    }
})