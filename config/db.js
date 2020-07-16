const mongoose = require('mongoose');
require('dotenv').config();
const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@test.cywqa.mongodb.net/Clients?retryWrites=true&w=majority`;

const connectDb = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Connected to database")
    } catch (e) {
        console.log(e)
        process.exit(1);
    }
}

module.exports = connectDb;
