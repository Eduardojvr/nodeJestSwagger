const { Pessoa } = require("../entidade/Pessoa");


exports.getUsuario = (req, res, next) => {
    //#swagger.tags = ['Usuario']

    p = new Pessoa("Eduardo Júnio veloso Rodrigues", "12345678911");
    res.status(200).send(p);
};

exports.post = (req, res, next) => {
        //#swagger.tags = ['Usuario']

    res.status(200).send('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
        //#swagger.tags = ['Usuario']

    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
        //#swagger.tags = ['Usuario']

    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};