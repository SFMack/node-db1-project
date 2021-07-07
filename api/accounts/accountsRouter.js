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

// UPDATE
// change an accounts values
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  db("accounts")
    .where("id", "=", id)
    .update(updates)
    .then(updatedAccount => {
      res.status(202).json(updatedAccount);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not update your resource" });
    });
});

// DELETE
// delete an account
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  db("accounts")
    .where("id", "=", id)
    .del()
    .then(deletedAccount => {
      res.status(202).json(deletedAccount);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "Could not delete your resource" });
    });
});

module.exports = router;
