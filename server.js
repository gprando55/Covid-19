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

const nunjucks = require("nunjucks");
nunjucks.configure("./", {
  express: server,
  noCache: true
});

server.get("/", async (req, res) => {
  const api = await axios.get(
    "https://thevirustracker.com/free-api?global=stats"
  );

  const dados = api.data.results[0]; // não esquecer ... ele retorna um vetor ... os dados estão no indice 0
  // console.log(dados);
  return res.render("index.html", { dados }); // passando dados api para o index via nunjunks
});

server.post("/", async (req, res) => {
  const { paises } = req.body;
  const api = await axios.get(
    `https://thevirustracker.com/free-api?countryTotal=${paises}`
  );
  // console.log(api.data.countrydata[0]);
  const dados = api.data.countrydata[0];
  return res.render("index.html", { dados });
});
server.listen(3000);
