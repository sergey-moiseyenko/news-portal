;!function () {

  let userModel = {};
  let fs = require('fs');

  userModel.setUser = user => {

    let users = JSON.parse(fs.readFileSync('users.json'));
    users.push(user);
    fs.writeFile('users.json', JSON.stringify(users));
  };

  module.exports.userModel = userModel;
}();
