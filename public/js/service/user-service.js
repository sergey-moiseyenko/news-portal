;!function (users) {

  let userService = {};

  userService.setUser = (user) => {

    //<-- check user exist -->
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/user', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));

    if (xhr.status == 400) return false;
    return true;
  };

  userService.getUser = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/current_user', false);
    xhr.send();

    return JSON.parse(xhr.responseText)[0];
  };

  userService.removeCurrentUser = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', 'http://localhost:3000/logout');
    xhr.send();
  };

  userService.getUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/users', false);
    xhr.send();

    users = JSON.parse(xhr.responseText);

    return users;
  };



  //create promise

  function createPromise(url) {

    return new Promise((resolve, reject) => {

    });
  };

  //

  window.userService = userService;
}(window.users);
