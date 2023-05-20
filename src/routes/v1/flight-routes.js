const express = require('express');

const {FlightController} = require('../../controllers');
 
const {CreateFlightValidator} = require('../../middlewares');

const router = express.Router();
//console.log("inside the airplane routes");
router.post('/',CreateFlightValidator
,FlightController.CreateFlight);

router.get('/',FlightController.GetAllFlight);



module.exports = router;