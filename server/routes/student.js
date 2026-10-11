const express = require('express');
const routes = express.Router();
const studentController = require('../controllers/studentController');
routes.get("/", studentController.view);
// AddUser
routes.get("/adduser", studentController.addUser);
routes.post("/adduser", studentController.add);

// EditUser// Show edit form with current student details
routes.get("/edituser/:id", studentController.editUser);
routes.post('/edituser/:id', studentController.update)
//DeleteUser
routes.get("/deleteuser/:id", studentController.delete)
module.exports = routes;