
const { response } = require ('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'noname', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page,
        limit
    });

}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    //res.
    res.json({
        msg: 'post API - POST',
        nombre,
        edad
    });

}

const usuariosPut = (req, res = response) => {

    const { id } = req.params; 
    
    res.json({
        msg: 'put API - PUT',
        id
    });

}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: 'patch API - PATCH'
    });

}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: 'delete API - DELETE'
    });

}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}