const {AirplaneRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const {AppError} = require('../utils')

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error){
        if(error.name == 'TypeError')
            throw new AppError("this is the type error",StatusCodes.INTERNAL_SERVER_ERROR);
        throw error;
    }
}
async function DeleteAirplane(data){
    try {
        const airplane = await airplaneRepository.delete(data);
        return airplane;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airplane you want to delete is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function GetAirplane(data){
    try {
        const airplane = await airplaneRepository.get(data);
        return airplane;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airplane you want to search is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function GetAllAirplane(){
    try {
        const airplane = await airplaneRepository.getAll();
        return airplane;
    } catch (error) {
        throw new AppError("some went wrong in the getting the airplanes",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function UpdateAirplane(data,id){
    try {
        const airplane = await airplaneRepository.update(data,id);
        return airplane;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the airplane you want to update is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirplane,
    DeleteAirplane,
    GetAirplane,
    GetAllAirplane,
    UpdateAirplane
}