const CreateFlightValidator = require('./create-flight-middleware');

module.exports = {
        Create_airplane_validator : require('./CreateAirplaneValidator'),
        CreateCityValidator : require('./create-city-middleware'),
        CreateAirportValidator:require('./create-airport-middleware'),
        CreateFlightValidator : require('./create-flight-middleware')
}