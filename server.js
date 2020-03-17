const express = require("express");
const { Router } = require("express");
const server = express();
server.use(express.json());

// configurar o servidor para apresentar arquivos como JS, CSS
server.use(express.static("public"));

// Habilitar Body do formulario
server.use(express.urlencoded({ extended: true }));

server.use("/", require("./routes"));

server.listen(3000);
