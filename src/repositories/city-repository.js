const CrudRepository = require('./crud-repository');
const {City} = require('../models')
//console.log(Airplane);
class CityRepository extends CrudRepository{
    constructor(){
        super(City);
    }
}
module.exports = CityRepository;
