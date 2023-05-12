const CrudRepository = require('./crud-repository');
const {airplane} = require('../models')
//console.log(Airplane);
class AirplaneRepository extends CrudRepository{
    constructor(){
        super(airplane);
    }
}
module.exports = AirplaneRepository;
