//configure database in this file
//import module 
const mongoose=require('mongoose')
require('dotenv').config()

//connection string to connect with mongoDB database
const mongoURL=process.env.MONGO_URI;

mongoose.connect(mongoURL)
//creating connection object 
const db =mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting database"));

db.once('open',function(){
    console.log("database connected successfully");
});

module.exports=db;