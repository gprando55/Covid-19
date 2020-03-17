const express = require("express");
const cors = require("cors");
const axios = require("axios");
const server = express();

// configurar o servidor para apresentar arquivos como JS, CSS
server.use(express.json());
server.use(cors());
server.use(express.static("public"));
// Habilitar Body do formulario
server.use(express.urlencoded({ extended: true }));

server.get("/", async (req, res) => {
  const teste = await axios.get(
    "https://thevirustracker.com/free-api?global=stats"
  );
  console.log(teste);
  return res.json(teste.data);
});

server.listen(3000);
