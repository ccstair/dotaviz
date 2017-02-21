const db = require('../database/db');

const HeroAttributes = db.Model.extend({
  tableName: 'attributes',
  hasTimestamps: false,
  // gradeableobjects() {
  //   return this.hasMany('GradeableObjectModel', 'type_id');
  // },
});

module.exports = db.model('HeroAttributes', HeroAttributes);
