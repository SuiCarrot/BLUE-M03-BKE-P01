const lordsService = require('../services/tww.service.js');


const findLordsController = (req,res) => {
    res.send(lordsService.findLordsService())
}

const findLordByIdController = (req,res) =>{
    res.send(lordsService.findLordByIdService(req.params.id))
}

const createLordController = (req,res) => {
    res.send(lordsService.createLordService(req.body));
}

const updateLordController = (req,res) =>{
    res.send(lordsService.updateLordService(+req.params.id, req.body))
}

const deleteLordController = (req,res)=>{
    lordsService.deleteLordService(req.params.id);
    res.send({message:'Legendary Lord sucessfully deleted!'})
}

module.exports = {
    findLordsController,
    findLordByIdController,
    createLordController,
    updateLordController,
    deleteLordController,
}
