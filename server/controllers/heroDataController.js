const HeroImages = require('../models/heroImagesModel');
const HeroAttributes = require('../models/heroAttributesModel');

const heroDataController = {
  getAllImages(req, res) {
    HeroImages.fetchAll(
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
  getSingleHeroAttributes({ params: { id } }, res) {
    HeroAttributes.forge({ id })
    .fetch()
    .then(heroAttributes => {
      console.log('heroData', JSON.stringify(heroAttributes))
      res.json(heroAttributes)
    })
    .catch((err) => {
      console.log(`heroDataController.getSingleHeroAttributes - Error: ${err}`);
      res.sendStatus(500);
    });
  },
};

module.exports = heroDataController;
