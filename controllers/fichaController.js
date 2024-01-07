import ficha from "../models/Ficha.js";

class FichaController {

    static async listarFichas (req, res) {
        try {
            const listaFichas = await ficha.find({});
            res.status(200).json(listaFichas);
            } catch (e) {
              res.status(500).json({ message: `${e.message} - falha na requisição` });
        };
    };

    static async listarFichasPorId (req, res) {
        try {
            const id = req.params.id;
            const fichaEncontrada = await ficha.findById(id);
            res.status(200).json(fichaEncontrada);
            } catch (e) {
              res.status(500).json({ message: `${e.message} - falha na requisição da ficha!` });
        };
    };

    static async atualizarFicha (req, res) {
        try {
            const id = req.params.id;
            await ficha.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Ficha atualizada!"});
            } catch (e) {
              res.status(500).json({ message: `${e.message} - falha na atualização!` });
        };
    };


    static async excluirFicha (req, res) {
        try {
            const id = req.params.id;
            await ficha.findByIdAndDelete(id);
            res.status(200).json({message: "Ficha excluída!"});
            } catch (e) {
              res.status(500).json({ message: `${e.message} - falha na exclusão!` });
        };
    };


    static async cadastrarFicha (req, res) {
        try {
            const novaFicha = await ficha.create(req.body);
            res.status(201).json({message: "Ficha cadastrada com sucesso!", ficha: novaFicha });
        } catch (e) {
            res.status(500).json({message: `${e.message} - falha ao cadastrar ficha`});
        };
    };
};

export default FichaController;