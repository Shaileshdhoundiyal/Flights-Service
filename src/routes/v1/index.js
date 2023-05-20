const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes')

const CityRoutes = require('./city-routes');

const AirportRoutes = require('./airport-routes')

const FlightRoutes = require('./flight-routes')


const router = express.Router();
//console.log("inside the v1 routes");

router.get('/info', InfoController.info);

router.use('/airplane',airplaneRoutes);

router.use('/airport', AirportRoutes);

router.use('/flight', FlightRoutes);

router.use('/city',CityRoutes);

module.exports = router;