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
    const {
      name,
      github_username,
      fields,
      techs,
      whatsapp,
      latitude,
      longitude,
      email,
      avatar_url,
    } = request.body;

    console.log(request.body);
    let dev;

    const finder = await Dev.findOne({ email });
    if(!finder) {
      // const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
      // let { bio } = apiResponse.data;
      const techsArray = parseStringAsArray(techs);
      console.log(techsArray);
      const fieldsArray = parseStringAsArray(fields);
      console.log(fieldsArray);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

     dev = await Dev.create({
        github_username,
        fields: fieldsArray,
        name,
        email,
        whatsapp,
        avatar_url,
        // bio,
        techs: techsArray,
        location,
      })
      return response.status(200).send(dev);
    }
    return response.status(400).send({error:'User já existe'});
  }, 
};