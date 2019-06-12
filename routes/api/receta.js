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

    
router.post('/',(req, res, next)=>{
    var newElement = Object.assign({},recetaStruct,{"id":uuid()}, req.body);
    recetaCollection.push(newElement);

    res.status(200).json(newElement);

});

router.put('/:id',(req, res, next)=>{
    var id = req.params.id;
    var modifiedReceta = {};
    var originalReceta = {};

    recetaCollection = recetaCollection.map((e,i)=>{
        if(e.id == id){
            originalReceta = Object.assign({}, e);
            return modifiedReceta = Object.assign({}, e, req.body);
        }
        return e;

    });

    res.status(200).json({ "Antiguo": originalReceta, "Nuevo" : modifiedReceta});

});







module.exports = router;
