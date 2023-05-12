const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes')

const CityRoutes = require('./city-routes');


const router = express.Router();
//console.log("inside the v1 routes");

router.get('/info', InfoController.info);

router.use('/airplane',airplaneRoutes);

router.use('/city',CityRoutes);

module.exports = router;