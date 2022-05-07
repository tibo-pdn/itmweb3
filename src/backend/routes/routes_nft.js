/**
 * This file is a part of Starton Hackaton Projet
 * 
 * @author Tibo Pendino
 */

const express = require('express');
const router = express.Router();

router.post('/api/nft', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(201).send({
        status: "OK"
    });
}));

router.get('/api/nft/:nft_id', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

router.put('/api/nft/:nft_id', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

router.delete('/api/nft/:nft_id', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

module.exports = router;