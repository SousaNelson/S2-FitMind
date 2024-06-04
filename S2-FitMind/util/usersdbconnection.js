/*const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const dbconection = async() => {
    mongoose
    .connect(env.MONGODB_URL)
    .then( () => console.log('User db connected!'))
    .catch( (err) => {
        console.log(err.message);
    } )
};
module.exports = dbconection;*/