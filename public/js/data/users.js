;!function () {

  let users = [];

  let localUsers = JSON.parse(localStorage.getItem('users'));
  if (localUsers != null) users = localUsers;

  window.users = users;
}();