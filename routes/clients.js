const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.post('/', async (req, res) => {
    const {firstName, lastName} = req.body;
    // check if exists ??
    try {
        let client = new Client(req.body);
        client.save();
    } catch (e) {
        console.log(e)
        return res.status(500).send("Server error")
    }
});

router.get('/', async (req, res) => {

    try {
        let clients = await Client.find();
        res.json(clients);
    } catch (e) {
        console.log(e)
        return res.status(500).send("Server error")
    }
});

router.post('/', async (req, res) => {
    // const {firstName, lastName} = req.body;
    try {
            let clients = await Client.findOne({'firstName' : req.params.firstName});
        res.json(clients);

    } catch (e) {
        console.log(e)
        return res.status(500).send("Server error")
    }
});

module.exports = router;
