const db = require('../database/db');

const HeroData = db.Model.extend({
  tableName: 'hero_images',
  hasTimestamps: false,
  // gradeableobjects() {
  //   return this.hasMany('GradeableObjectModel', 'type_id');
  // },
});

module.exports = db.model('HeroData', HeroData);
