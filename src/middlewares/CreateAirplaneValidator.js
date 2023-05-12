const {StatusCodes} = require('http-status-codes');
const {error_resonse} = require('../utils');


async function validateCreateAirplane(req,res,next){

    if(!req.body.ModelNumber){
        error_resonse.message = "airplane not created";
        error_resonse.explanation = "the model number of the plane is neccessary"
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    next();
}

module.exports = {
    validateCreateAirplane}