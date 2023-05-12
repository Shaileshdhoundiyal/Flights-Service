const express = require('express');

const {AirplaneController} = require('../../controllers');
 
const {Create_airplane_validator} = require('../../middlewares');

const router = express.Router();
//console.log("inside the airplane routes");
router.post('/',Create_airplane_validator.validateCreateAirplane
,AirplaneController.CreateAirplane);

router.delete('/:id',AirplaneController.DeleteAirplane);

router.get('/:id',AirplaneController.GetAirplane);

router.get('/',AirplaneController.GetAllAirplane);

router.patch('/:id',AirplaneController.UpdateAirplane);

module.exports = router;