const express = require("express");
const router = express.Router();
const authorController = require("../controllers/author.controller");

router.post("/", authorController.createAuthor);

router.get("/", authorController.listAuthors);

module.exports = router;
