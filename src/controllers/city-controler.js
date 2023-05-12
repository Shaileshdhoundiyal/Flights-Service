const {} = require('../services')
const {StatusCodes} = require('http-status-codes');
const {AppError,error_resonse,Sucess_response} = require('../utils')
const {CityServices} = require('../services')



async function CreateCity(req,res){
    try {
        city = await CityServices.CreateCity({
            name : req.body.Name
        });
        Sucess_response.data = city;
        Sucess_response.message = "the city is created"
        res.status(StatusCodes.CREATED).json(Sucess_response);


    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function DeleteCity(req,res){
    try {
        const city =  await CityServices.DeleteCity(req.params.id);
        Sucess_response.message = "Sucessfully deleted the city"
        Sucess_response.data = city;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function UpdateCity(req,res){
    try {
        const city =  await CityServices.UpdateCity({
            name : req.body.Name
        },req.params.id);
        Sucess_response.message = "Sucessfully updated the city "
        Sucess_response.data = city;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

module.exports = {
    CreateCity,
    DeleteCity,
    UpdateCity
    
}