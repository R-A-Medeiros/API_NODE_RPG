import express from "express";
import conexaoDb from "./db.js";
import routes from "./routes/index.js";

const conexao = await conexaoDb();

conexao.on("error", erro =>{
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão bem sucedida!");
});

const app = express();
routes(app);

export default app;