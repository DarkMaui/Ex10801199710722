const express = require('express');
var router = express.Router();
var uuid = require('uuid/v4');

var recetaCollection =[];
var recetaStruct = {

    "id": 0,
    "receta": '',
    "precio": 0,
    "tipo": '',
    "observacion": '',
    "estado": ''
}

recetaCollection.push(
    Object.assign({},recetaStruct,{"id": uuid(), "receta": "tosan", "precio":40, "tipo":"jarabe", "observacion":"para la tos","estado": "activo"})

);

router.get('/', (req, res, next) =>{
    res.status(200).json(recetaCollection);
});



router.get('/:id', (req, res, next)=>{

    if (!req.params.id) return next();
    var id = req.params.id;
    var receta =recetaCollection.filter((e, i) =>{
        return (e.id === id);
    });

    if (receta.length > 0) {
        res.status(200).json(receta[0]);
    }else {
        res.status(404).json({});
    }

    });





module.exports = router;
