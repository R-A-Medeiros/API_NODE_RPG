import express from "express"
import fichas from "./fichasRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

    app.use(express.json(), fichas)
};

export default routes;