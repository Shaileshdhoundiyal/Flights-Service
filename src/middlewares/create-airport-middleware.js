const {StatusCodes} = require('http-status-codes');
const {error_resonse} = require('../utils');


async function validateCreateAirport(req,res,next){

    if(!req.body.name){
        error_resonse.message = "airport not created";
        error_resonse.explanation = "the name of the airport is neccessary"
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.code){
        error_resonse.message = "airport not created";
        error_resonse.explanation = "the code of the airport is neccessary"
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.cityId){
        error_resonse.message = "airport not created";
        error_resonse.explanation = "the cityId of the airport is neccessary"
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
   
    next();
}

module.exports = validateCreateAirport