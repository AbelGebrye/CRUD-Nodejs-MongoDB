const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');

router.get('/employee/showAll',EmployeeController.showAll)
router.post('/employee/addEmployee',EmployeeController.insertOnes)
router.delete('/employee/deleteById/:id',EmployeeController.delteById)
router.get('/employee/findById/:id',EmployeeController.findByIds)
router.put('/employee/updateById/:id',EmployeeController.updateOnes)
router.get('/employee/showAll/sortFname',EmployeeController.findAllSortedByFname)

module.exports = router;