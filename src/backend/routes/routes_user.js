/**
 * This file is a part of Starton Hackaton Projet
 * 
 * @author Tibo Pendino
 */

const express = require('express');
const router = express.Router();

router.post('/api/user/login', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

router.post('/api/user/logout', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

router.get('/api/user/:user_id', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

router.put('/api/user/:user_id', ((req, res) => {
    console.log(`${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.url}`);
    res.status(200).send({
        status: "OK"
    });
}));

module.exports = router;