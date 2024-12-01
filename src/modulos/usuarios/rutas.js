const express = require('express');

const respuesta = require('../../red/respuestas');
const controlador = require('../index');

const router = express.Router();

router.get('/', todos);
router.get('/', uno);
router.post('/', Agregar);
router.put('/', eliminar);

async function todos(req, res, next){
    try{
        const items = await controlador.todos (req.params.id);
        respuesta.success(req, res, items, 200);
        }catch(err){
            next(err);
        }
};


async function uno(req, res, next){
    try{
    const items = await controlador.uno (req.params.id);
    respuesta.success(req, res, items, 200);
    }catch(err){
        next(err);
    }
};

async function Agregar(req, res, next){
    try{
    const items = await controlador.Agregar (req.body);
    if(req.body.id == 0){
        mensaje = 'Item guardado con exito';
    }else{
        mensaje = 'Item actualizado con exito';
    }
    respuesta.success(req, res, 'Item eliminado satisfactoriamente', 201);
    }catch(err){
        next(err);
    }
};

async function eliminar(req, res, next){
    try{
    const items = await controlador.eliminar (req.body);
    respuesta.success(req, res, 'Item eliminado satisfactoriamente', 200);
    }catch(err){
        next(err);
    }
};

module.exports = router;