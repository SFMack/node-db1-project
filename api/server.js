const express = require("express");
const db = require("../data/dbConfig.js");
const accountsRouter = require("./accounts/accountsRouter.js");

const server = express();

server.use(express());
server.use(express.json());
server.use("/api/accounts", accountsRouter);

server.get("/", (req, res) => {
  res.send(`<h1>Server is running</h1>`);
});

module.exports = server;
