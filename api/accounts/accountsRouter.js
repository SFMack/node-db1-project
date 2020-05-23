const express = require("express");
const db = require("../../data/dbConfig.js");

const router = express.Router();

// CREATE
// add account
router.post("/", (req, res) => {
  const newAccount = req.body;
  db("accounts")
    .insert(newAccount)
    .then(successData => {
      res.status(202).json(successData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not create new resource" });
    });
});

// READ
// get all accounts
router.get("/", (req, res) => {
  db("accounts")
    .then(accountsData => {
      res.status(200).json(accountsData);
    })
    .catch(err => {
      console.log(err);
      res.status(404).json({ errorMessage: "Could not find your resource" });
    });
});

module.exports = router;
