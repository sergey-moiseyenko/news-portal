;!function () {

  let users = [];

  //load users from db

  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/users', false);
  xhr.send();

  users = JSON.parse(xhr.responseText);

  window.users = users;
}();