const express = require('express');
const router = express.Router();

const RecetaApi = require('./receta');

router.get('/', (req, res, next)=>{
    
    res.status(200).json({"ok":"version1"});
    
    });

    router.use('/receta', RecetaApi);

module.exports = router;
