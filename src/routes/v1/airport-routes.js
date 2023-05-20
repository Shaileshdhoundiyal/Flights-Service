const express = require('express');

const {AirportController} = require('../../controllers');
 
const {CreateAirportValidator} = require('../../middlewares');

const router = express.Router();
//console.log("inside the airplane routes");
router.post('/',CreateAirportValidator
,AirportController.CreateAirport);

router.delete('/:id',AirportController.DeleteAirport);

router.get('/:id',AirportController.GetAirport);

router.get('/',AirportController.GetAllAirport);

router.patch('/:id',AirportController.UpdateAirport);

module.exports = router;