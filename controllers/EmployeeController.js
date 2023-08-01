const { response } = require('express');
const Employee = require('../models/Employee');

//Show all employees
const showAll = (req,res,next) =>{
    Employee.find()
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:"Error occured showAll"
        })
    })
}

//Show employees By id
const findByIds = (req,res,next) =>{
    let employeeId = req.params.id;
    console.log(employeeId);
    Employee.findOne({_id:employeeId})
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:"Error occured findById"
        })
    })
}
//Show employees By id
const findAllSortedByFname = (req,res,next) =>{
  
    Employee.find().sort({fname:1})
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:"Error occured findById"
        })
    })
}


//Insert Empoloyee one
const insertOnes = (req,res,next) =>{
    let employee = new Employee({
        fname:req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone
    })
    employee.save()
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:"Error occured insertOne"
        })
    })
}

//Insert Empoloyee Many
const insertManys = (req,res,next) =>{
    Employee.insertMany(req.body)
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:"Error occured insertMany"
        })
    })
}

//Update Empoloyee By ID
const updateOnes = (req,res,next) =>{
    let employeeId = req.params.id;
     console.log(employeeId);
    let employeeUpdate = {
        fname:req.body.fname,
        lname:req.body.lname,
        phone:req.body.phone
    }

    Employee.findByIdAndUpdate(employeeId,{$set:employeeUpdate})
    .then(response =>{
        res.json({response})
    })
    .catch(error=>{
        res.json({
            message:"Error occured Update"
        })
    })
}

//Delete Employee By ID
const delteById =  (req,res,next) =>{
    let employeeId = req.params.id;
    Employee.findOneAndRemove(employeeId)
    .then(response =>{
        res.json({response})
    })
    .catch(error =>{
        res.json({
            message:"Error occured Delete"
        })
    })
}

module.exports = {
    showAll,findByIds,insertOnes,insertManys,delteById,updateOnes, findAllSortedByFname
}