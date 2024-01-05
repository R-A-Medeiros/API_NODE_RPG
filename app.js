import express from "express";
import conexaoDb from "./db.js";
import ficha from "./models/Ficha.js"

const conexao = await conexaoDb();

conexao.on("error", erro =>{
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexão bem sucedida!");
});

const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/fichas", async (req, res) => {
  const listaFichas = await ficha.find({});
  res.status(200).json(listaFichas);
});

app.get("/fichas/:id", (req, res) => {
  
})

app.post("/fichas", (req, res) => {
 
});

app.put("/fichas/:id", (req, res) => {
 
});

app.delete("/fichas/:id", (req, res) => {

});

export default app;
// module.exports = app;