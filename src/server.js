const express = require("express");
const server = express();

//Página inicial
server.get("/", (req, res) => {
    res.send("Hello world")
})

//Ligar o servidor
server.listen(3000);
