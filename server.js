const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');

const EmployeeRoute = require('./routes/employee')

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(morgan('dev'));

mongoose.connect("mongodb://localhost:27017/employeedb",{useNewUrlParser:true,useUnifiedTopology:true});
const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err);
});

db.once('open',()=>{
    console.log("Database Connection Established Successfully!")
});

server.listen(9090, function check(error){
    if(error) {
        console.log("Error in port");
    } else { console.log("Port Started!! on 9090")}
});

server.use(cors({
    origin:"http://localhost:4200"
}));

server.use('/api',EmployeeRoute);