const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/resultados.json", (req, res) => {
  res.sendFile(path.join(__dirname, "resultados.json"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
