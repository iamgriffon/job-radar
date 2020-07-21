const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//Controllers tem 5 funções no geral: Index, show, store, update, destroy

//Index = listagem
//Show = amostra individual
//Store = cadastro
//Update = atualização
//Destroy = deletar

module.exports = {
  async store(request, response){
    const { github_username, techs, latitude, longitude, whatsapp, email } = request.body;
    const finder = await Dev.findOne({ github_username });
    if(!finder) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

      console.log(apiResponse);

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        email,
        whatsapp,
        avatar_url,
        bio,
        techs: techsArray,
        location,
      })
    }
    return response.json(dev);
  }, 
};