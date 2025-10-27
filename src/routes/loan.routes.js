const express = require("express");
const router = express.Router();
const loanController = require("../controllers/loan.controller");

router.post("/", loanController.createLoan);

module.exports = router;
