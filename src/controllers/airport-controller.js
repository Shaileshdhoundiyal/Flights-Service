const { response } = require('express');
const { StatusCodes } = require('http-status-codes');
const {AirportServices} = require('../services');
const {Sucess_response , error_resonse} = require('../utils');


async function CreateAirport(req,res){
    try {
        //console.log("inside the airplane controller");
        const airport = await AirportServices.CreateAirport({
            name : req.body.name,
            code : req.body.code,
            address : req.body.address,
            cityId : req.body.cityId
        });
        Sucess_response.message = "Sucessfully created the airport";
        console.log(airport);
        Sucess_response.data = airport;
        return res.status(StatusCodes.CREATED).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function DeleteAirport(req,res){
    try {
        const airport =  await AirportServices.DeleteAirport(req.params.id);
        Sucess_response.message = "Sucessfully deleted the airplane"
        Sucess_response.data = airport;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function GetAirport(req,res){
    try {
        const airport =  await AirportServices.GetAirport(req.params.id);
        Sucess_response.message = "Sucessfully get the element "
        Sucess_response.data = airport;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function GetAllAirport(req,res){
    try {
        const airport =  await AirportServices.GetAllAirport(req.params.id);
        Sucess_response.message = "Sucessfully get the element "
        Sucess_response.data = airport;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}

async function UpdateAirport(req,res){
    try {
        const request = {};
        if(req.body.name)
            request.name = req.body.name;
        if(req.body.address)
            request.address = req.body.address;
        if(req.body.code)
            request.code = req.body.code;
        const airport =  await AirportServices.UpdateAirport(request,req.params.id);
        Sucess_response.message = "Sucessfully updated the element "
        Sucess_response.data = airplane;
        return res.status(StatusCodes.OK).json(Sucess_response)
    } catch (error) {
        error_resonse.error = error;
        return res.status(error.statusCode).json(error_resonse);
    }
}
module.exports = {
    CreateAirport,
    DeleteAirport,
    GetAirport,
    GetAllAirport,
    UpdateAirport
}

