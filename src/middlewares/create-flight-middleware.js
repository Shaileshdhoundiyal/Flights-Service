const {error_resonse} = require('../utils')
const {StatusCodes} = require('http-status-codes')
const {Helpers} = require('../utils')

async function CreateFlightValidator(req,res,next){
    if(!req.body.flightNumber){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the flight number  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.airplaneId){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the airplaneId  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.departureAirportId){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the departureAirportId  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.arrivalAirportId){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the arrivalAirportId  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.arrivalTime){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the arrivalTime  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.departureTime){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the departureTime  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }

    if(!req.body.price){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the price  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(!req.body.totalSeats){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the  totalSeats  of the flight is neccessary"
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    if(Helpers.CompareTime(req.body.arrivalTime,req.body.departureTime)){
        error_resonse.message = " flight not created ";
        error_resonse.error = {
            explanation : "the arrival time of the flight is not before the departure time of the flight "
        }
        return res.status(StatusCodes.BAD_REQUEST).json(error_resonse)
    }
    next();
}

module.exports = CreateFlightValidator;