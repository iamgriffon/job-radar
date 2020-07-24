const People = require('../models/People');
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
    const finder = await People.findOne({ email });
    if(!finder) {
      const techsArray = parseStringAsArray(techs);
      console.log(techsArray);
      const fieldsArray = parseStringAsArray(fields);
      console.log(fieldsArray);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

     People = await People.create({
        github_username,
        fields: fieldsArray,
        name,
        email,
        whatsapp,
        avatar_url,
        techs: techsArray,
        location,
      })
      return response.status(200).send(People);
    }
    return response.status(400).send({error:'User já existe'});
  }, 
};