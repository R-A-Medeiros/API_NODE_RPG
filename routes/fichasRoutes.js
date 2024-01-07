import express from "express";
import FichaController from "../controllers/fichaController.js";

const routes = express.Router();

routes.get("/fichas", FichaController.listarFichas);
routes.get("/fichas/:id", FichaController.listarFichasPorId);
routes.post("/fichas", FichaController.cadastrarFicha);
routes.put("/fichas/:id", FichaController.atualizarFicha);
routes.delete("/fichas/:id", FichaController.excluirFicha);

export default routes;