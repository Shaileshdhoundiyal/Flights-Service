const {CityRepository} = require('../repositories');
const {StatusCodes} = require('http-status-codes')
const {AppError} = require('../utils')

const cityRepository = new CityRepository();


async function CreateCity(data){
    try {
        const city = await cityRepository.create(data);
        console.log(city);
        return city;
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

async function DeleteCity(data){
    try {
        const city = await cityRepository.delete(data);
        return city;
    } catch (error) {
        //console.log(error.statusCode);
        console.log(error);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the city you want to delete is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function UpdateCity(data,id){
    try {
        const airplane = await cityRepository.update(data,id);
        return airplane;
    } catch (error) {
        //console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("the city you want to update is not present",error.statusCode);
        }
        throw new AppError("some went wrong in this process",StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    CreateCity,
    DeleteCity,
    UpdateCity
}

