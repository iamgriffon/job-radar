const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response){
    // const { latitude, longitude, fields } = request.query;
    // const fieldsArray = parseStringAsArray(fields);
  
    //Agora para buscar pessoas em um raio de 10KM

    const devs = await Dev.find({});
    return response.json({devs});
  }
}