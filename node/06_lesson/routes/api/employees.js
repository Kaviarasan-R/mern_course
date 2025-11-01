const express = require("express");
const router = express.Router();
const employeesController = require("../../controllers/employeesController");

// prefix: employees/
router
  .route("/")
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);

// prefix: employees/:id
router.route("/:id").get(employeesController.getEmployee);

module.exports = router;
