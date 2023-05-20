const {AirportRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const {AppError} = require('../utils')


const airportRepository = new AirportRepository();


async function CreateAirport(data){
    try {
        const airport = await airportRepository.create(data);
        console.log(airport);
        return airport;
    } catch (error){
        console.log(error);
        if(error.name == 'SequelizeUniqueConstraintError' || error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach(element => {
                explanation.push(element);
            });
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError("there is some server problem city is not creates",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function DeleteAirport(data){
    try {
        const airport = await airportRepository.delete(data);
        return airport;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airport you want to delete is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function GetAirport(data){
    try {
        const airport = await airportRepository.get(data);
        return airport;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airport you want to search is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function GetAllAirport(){
    try {
        const airport = await airportRepository.getAll();
        return airport;
    } catch (error) {
        throw new AppError("some went wrong in the getting the airports",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function UpdateAirport(data,id){
    try {
        const airport = await airportRepository.update(data,id);
        return airport;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airport you want to update is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    CreateAirport,
    DeleteAirport,
    GetAllAirport,
    GetAirport,
    UpdateAirport
}