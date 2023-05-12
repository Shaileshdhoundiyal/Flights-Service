const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const {AirplaneService} = require('../services');
const {Sucess_response , error_resonse} = require('../utils');


async function CreateAirplane(req,res){
    try {
        //console.log("inside the airplane controller");
        const airplane = await AirplaneService.createAirplane({
            modelNumber : req.body.ModelNumber,
            capacity : req.body.Capacity
        });
        Sucess_response.message = "Sucessfully created the airplane";
        console.log(airplane);
        Sucess_response.data = airplane;
        return res.status(StatusCodes.CREATED).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function DeleteAirplane(req,res){
    try {
        const airplane =  await AirplaneService.DeleteAirplane(req.params.id);
        Sucess_response.message = "Sucessfully deleted the airplane"
        Sucess_response.data = airplane;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function GetAirplane(req,res){
    try {
        const airplane =  await AirplaneService.GetAirplane(req.params.id);
        Sucess_response.message = "Sucessfully get the element "
        Sucess_response.data = airplane;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function GetAllAirplane(req,res){
    try {
        const airplane =  await AirplaneService.GetAllAirplane(req.params.id);
        Sucess_response.message = "Sucessfully get the element "
        Sucess_response.data = airplane;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function UpdateAirplane(req,res){
    try {
        const airplane =  await AirplaneService.UpdateAirplane({
            capacity : req.body.Capacity
        },req.params.id);
        Sucess_response.message = "Sucessfully updated the element "
        Sucess_response.data = airplane;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}
module.exports = {
    CreateAirplane,
    DeleteAirplane,
    GetAirplane,
    GetAllAirplane,
    UpdateAirplane
}