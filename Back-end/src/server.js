const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/database.config')

const app = express();
dotenv.config();
dbConnect();

var bodyParser = require('body-parser');

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

/////////////////////// cors ////////////////////////////////////

//angular on localHost 4200
//backend on localHost 5000
app.use(cors({
    credentials:true,
    origin:'http://localhost:4200'
}));

//////////////////////// port /////////////////////////

app.listen(5000,()=>{
    console.log("localhost : 5000")
});