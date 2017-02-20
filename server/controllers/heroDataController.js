const HeroData = require('../models/heroDataModel');

const heroDataController = {
  getAll(req, res) {
    console.log('made it to hero data controller')
    HeroData.fetchAll(
      { withRelated: [], }
    )
    .then(heroData => {
      console.log('heroData', JSON.stringify(heroData))
      res.json(heroData)
    })
    .catch((err) => {
      console.log(`heroDataController.getAll - Error: ${err}`);
      res.sendStatus(500);
    });
  },

};

module.exports = heroDataController;
