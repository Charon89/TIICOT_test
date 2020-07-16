const express = require('express');
const PORT = process.env.PORT || 5000;
const server = express();
const connectDb = require('./config/db')

connectDb();

server.use(express.json({extended: false}))
server.use('/clients', require('./routes/clients'))

server.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));
