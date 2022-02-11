import express, { Router } from 'express';

const router = express.Router();

router.get('/', ( req, res) => { // req - lo que enviamos : res lo que express nos responde

    res.render('Inicio', {
        pagina: 'Inicio'
    });
});

router.get('/nosotros', ( req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
});

router.get('/viajes', ( req, res) => {
    res.render('viajes', {
        pagina: 'Viajes'
    });
});

router.get('/testimoniales', ( req, res) => {
    res.render('testimoniales', {
        pagina: 'Testimoniales'
    });
});

export default router;