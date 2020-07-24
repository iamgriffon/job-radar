const People= require('../models/People');

module.exports = {
  async index(request, response){
    const people = await People.find({});
    return response.json({people});
  }
}