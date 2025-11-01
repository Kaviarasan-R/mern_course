const express = require("express");
const router = express.Router();
const path = require("path");

// prefix/
// router.get("^/$|/index(.html)?", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "views", "index.html"));
// });

// Advantages: Chaining
router
  .route("^/$|/index(.html)?")
  .get((req, res, next) => {
    console.log("Hello world");
    next();
  })
  .get((req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
  });

// prefix/new-page
router.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

// prefix/old-page.html
router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html"); //302 by default
});

module.exports = router;
