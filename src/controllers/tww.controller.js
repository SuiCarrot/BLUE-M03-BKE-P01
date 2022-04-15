const lordsService = require('../services/tww.service.js');


const findLordsController = (req,res) => {
    const allLords = lordsService.findLordsService()
    res.send(allLords)
}

const findLordByIdController = (req,res) =>{
    const legendaryLord = req.params.id;
    const chosenLord = lordsService.findLordByIdService(legendaryLord)
    res.send(chosenLord)
}

const createLordController = (req,res) => {
    const legendaryLord = req.body;
    const newLord = lordsService.createLordService(legendaryLord);
    res.send(newLord);
}

const updateLordController = (req,res) =>{
    const idLord = +req.params.id;
    const lordEdit = req.body;
    const updatedLord = lordsService.updateLordService(idLord, lordEdit);
    res.send(updatedLord)
}

const deleteLordController = (req,res)=>{
    const idLord = req.params.id;
    lordsService.deleteLordService(idLord);
    res.send({message:'Legendary Lord sucessfully deleted!'})
}

module.exports = {
    findLordsController,
    findLordByIdController,
    createLordController,
    updateLordController,
    deleteLordController,
}
