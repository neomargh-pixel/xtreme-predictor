const express = require("express");

const app = express();

app.use(express.static("."));

app.get("/api", (req, res) => {
    res.json({
        mensaje: "XTREME Predictor funcionando correctamente"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado en el puerto " + PORT);
});
