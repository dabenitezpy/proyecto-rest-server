const { response } = require('express');

const usuariosGet = (req, res = response) => {

    const { q, nombre = 'no name', direccion } = req.query

    res.json({
        "msg": "get API - controlador",
        q,
        nombre,
        direccion
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        "msg": "put API - contr.",
        id
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        "msg": "post API - contr.",
        nombre,
        edad
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        "msg": "delete API - contr."
    });
}

const usuariosPatch = (req, res  = response) => {
    res.json({
        "msg": "patch API - contr."
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
