const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../model/employees.json");

// employees
router
  .route("/") // employees/v1
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({ id: req.body.id });
  });

// employees/1
router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
