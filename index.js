import express from "express";
import filmesRouter from "./src/router/filmes.js";

const app = express();

app.use(express.json());
app.use(filmesRouter);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});