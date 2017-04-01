;!function() {

  class UserMapper {

    constructor() {
      this.db = require('diskdb');
      this.connect = this.db.connect('..', ['users', 'current_user']);
      this.db.users.remove();
      this.db.loadCollections(['users'], ['current_user']);
      this.db.users.save([{name: 'Sergey', password: '12345'}, {name: 'Igor', password: '21'}]);
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

  module.exports.UserMapper = UserMapper;
}();
