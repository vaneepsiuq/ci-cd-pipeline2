const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Aplicação funcionando com CI/CD!");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
