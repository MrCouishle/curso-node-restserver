const { Router } = require ('express');

const { usuariosGet } = require ('../controllers/usuarios');
const { usuariosPost } = require ('../controllers/usuarios');
const { usuariosPut } = require ('../controllers/usuarios');
const { usuariosPatch } = require ('../controllers/usuarios');
const { usuariosDelete } = require ('../controllers/usuarios');

const router = Router ();

router.get ('/', usuariosGet );
router.post ('/', usuariosPost );
router.put ('/:id', usuariosPut );
router.patch ('/', usuariosPatch );
router.delete ('/', usuariosDelete );

/*router.put ('/', (req, res) => {
    res.status(500).json({
        msg: 'put API'
    });
});

router.post ('/', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    });
});

router.delete ('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});

router.patch ('/', (req, res) => {
    res.json({
        msg: 'patch API'
    });
});
*/
module.exports = router;