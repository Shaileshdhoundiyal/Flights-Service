const {FlightRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const {AppError} = require('../utils');
const e = require('express');
const { Op } = require('sequelize');


const flightRepository = new FlightRepository();


async function CreateFlight(data){
    try {
        const flight = await flightRepository.create(data);
        console.log(flight);
        return flight;
    } catch (error){
        console.log(error);
        if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(element => {
                explanation.push(element);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("there is some server problem flight is not creates",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function GetAllFlight(query){
    try {
        const filters = {};
        const sortFilters = [];
        if(query.trips){
            [departureAirportId,arrivalAirportId] = query.trips.split("-");
            filters.departureAirportId = departureAirportId;
            filters.arrivalAirportId = arrivalAirportId;

        }
        if(query.date){
            filters.arrivalTime = date;
        }
        if(query.price){
            [minPrice,maxPrice] = query.price.split("-");
            filters.price = {
                [Op.between] : [((minPrice == undefined) ? 0 : minPrice) ,  ((maxPrice == undefined)? 20000 : maxPrice)]
            }
        }
        if(query.passengers){
            filters.totalSeats = {
                [Op.gte] : [query.passengers]
            }
        }
        if(query.sort){
            const params = query.sort.split(",")
            const sortFilters = params.map((param) => param.split("_"));
            sortFilter = sortFilters;
        }
        console.log(filters);
        const flights = await flightRepository.GetAllFlight(filters,sortFilter);
        return flights;
    } catch (error) {
        console.log(error);
        throw new AppError("some went wrong in the getting the flights",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    CreateFlight,
    GetAllFlight
}