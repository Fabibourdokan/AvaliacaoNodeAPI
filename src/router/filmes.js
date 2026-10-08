import express from "express";
import Controllerfilmes from "../controller/filmes.js"

const router = express.Router();

router.get("/buscar", Controllerfilmes.Buscar)
router.get("/buscarUm/:id", Controllerfilmes.BuscarUm)
router.post("/criar", Controllerfilmes.Criar)
router.put("/alterar/:id", Controllerfilmes.Alterar)
router.delete("/deletar/:id", Controllerfilmes.Deletar)

export default router