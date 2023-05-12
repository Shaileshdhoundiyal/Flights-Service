const {error_resonse} = require('../utils')
const {StatusCodes} = require('http-status-codes')

async function CreateCityValidator(req,res,next){
    if(!req.body.Name){
        error_resonse.message = " city not created ";
        error_resonse.error = {
            explanation : "the name  of the plane is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    next();
}

module.exports = CreateCityValidator;