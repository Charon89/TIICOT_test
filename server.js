const express = require('express');
const PORT = process.env.PORT || 5000;
const server = express();
const connectDb = require('./config/db')

connectDb();

server.use(express.json({extended: false}))
server.use('/clients', require('./routes/clients'))


    // Set static folder
    server.use(express.static('client/build'));

    server.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });


server.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));
