const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const {FlightServices} = require('../services');
const {Sucess_response , error_resonse} = require('../utils');


async function CreateFlight(req,res){
    try {
        //console.log("inside the airplane controller");
        const flight = await FlightServices.CreateFlight({
            flightNumber : req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime : req.body.departureTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats,
        });
        Sucess_response.message = "Sucessfully created the flight";
        console.log(flight);
        Sucess_response.data = flight;
        return res.status(StatusCodes.CREATED).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function GetAllFlight(req,res){
    try {
        const flights =  await FlightServices.GetAllFlight(req.query);
        Sucess_response.message = "Sucessfully get the elements"
        Sucess_response.data = flights;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        Error.captureStackTrace(error);
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

module.exports = {
    CreateFlight,
    GetAllFlight
}