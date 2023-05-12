const express = require('express');
const {CreateCityValidator} = require('../../middlewares')

const {CityController} = require('../../controllers');
 
const {Create_airplane_validator} = require('../../middlewares');

const router = express.Router();

router.post('/',CreateCityValidator,CityController.CreateCity);

router.delete('/:id',CityController.DeleteCity);

router.patch('/:id',CityController.UpdateCity);

module.exports = router;