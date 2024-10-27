const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
module.exports = () => {
    return mongoose.connect(process.env.MONGO_PATH);
};

