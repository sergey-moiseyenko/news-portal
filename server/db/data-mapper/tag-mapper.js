;!function () {

  class TagMapper {
    constructor() {
      this.db = require('diskdb');
      this.db.connect('..', ['tags']);
    }

    getTagsFromDb() {
      return this.db.tags.find();
    }

    updateTags(tag) {
      this.db.tags.save(tag);
    }
  }

  module.exports.tagMapper = new TagMapper();
}();