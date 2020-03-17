const express = require("express");
const { Router } = require("express");
const server = express();

// configurar o servidor para apresentar arquivos como JS, CSS
server.use(express.static("public"));

// Habilitar Body do formulario
server.use(express.urlencoded({ extended: true }));

const routes = Router();

server.listen(3000);
