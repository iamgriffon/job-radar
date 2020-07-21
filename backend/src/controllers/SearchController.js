const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response){
    const { latitude, longitude, techs } = request.query;
    const skills = parseStringAsArray(techs);
  
    //Agora para buscar pessoas em um raio de 10KM

    const devs = await Dev.find({
      techs: {
        $in: skills
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000, //em metros
        },
      },
    });
    return response.json({devs});
  }
}