const CrudRepository = require('./crud-repository')
const {Flight,airplane,Airport} = require('../models');
const { Op,Sequelize } = require('sequelize');


class FlightRepository extends CrudRepository {
    constructor(){
        super(Flight)
    }

    async GetAllFlight(filters,sort) {
        
        const response = await Flight.findAll({
            where : filters,
            order : sort,
             include : {
                model : Airport,
                required:true,
                as : "departureAirport",
                // on: {
                //     col1:Sequelize.where(Sequelize.col('Flight.departureAirportId') ,"=" ,Sequelize.col("departureAirport.code"))
                // },
            },
              
            
        });
        return response;
    }    

    
    
}

module.exports = FlightRepository
