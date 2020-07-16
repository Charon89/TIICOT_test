const express = require('express');
const router = express.Router();
const Client = require('../models/client');

router.post('/', async (req, res) => {

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
        console.log(req)
        if (req.params.firstName) {
            let clients = await Client.find({"firstName": req.params.firstName});
            res.json(clients);
        } else {
            let clients = await Client.find();
            res.json(clients);
        }
    } catch (e) {
        console.log(e)
        return res.status(500).send("Server error")
    }
});

router.get('/:firstName', async (req, res) => {

    const name = req.params.firstName;
    console.log(name)

    try {
            let clients = await Client.find({"firstName": req.params.firstName});
            res.json(clients);
    } catch (e) {
        console.log(e)
        return res.status(500).send("Server error")
    }
});

// router.delete('/:id', async (req, res) => {
//     try {
//         let clients = await Client.findOneById(req.params.firstName);
//         res.json(clients);
//     } catch (e) {
//         console.log(e)
//         return res.status(500).send("Server error")
//     }
// });

module.exports = router;
