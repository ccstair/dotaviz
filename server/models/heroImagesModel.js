const db = require('../database/db');

const HeroImages = db.Model.extend({
  tableName: 'hero_images',
  hasTimestamps: false,
  // gradeableobjects() {
  //   return this.hasMany('GradeableObjectModel', 'type_id');
  // },
});

module.exports = db.model('HeroImages', HeroImages);
