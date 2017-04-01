;!function() {

  class UserMapper {

    constructor() {
      this.db = require('diskdb');
      this.connect = this.db.connect(__dirname + '/../data', ['users', 'current_user']);
    }

    getUsersFromDb() {
      return this.db.users.find();
    }

    getCurrentUserFromDb() {
      return this.db.current_user.find();
    }

    setCurrentUserToDb(user) {
      if (!user) return;

      this.db.current_user.remove();
      this.db.loadCollections(['current_user']);
      this.db.current_user.save(user);
    }

    deleteCurrentUserFromDb() {
      this.db.current_user.remove();
      this.db.loadCollections(['current_user']);
    }
  }

  module.exports.userMapper = new UserMapper();
}();
