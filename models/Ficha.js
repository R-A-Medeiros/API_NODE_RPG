import { Int32 } from "mongodb";
import mongoose from "mongoose";

const fichaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    raca: {type: String, required: true},
    jogador: {type: String, required: true},
    pv: {type: Number, required: true},
    equipamentos: {type: Object},
    pericias: {type: Array}
}, {versionKey: false});

const ficha = mongoose.model("fichas", fichaSchema);

export default ficha;