const express = require("express");
const axios = require("axios");
const routes = express.Router();

routes.get("/", async (req, res) => {
  const teste = await axios.get("https://api.github.com/users/alfredosavi/");
  return res.json(teste);
});

module.exports = routes;
