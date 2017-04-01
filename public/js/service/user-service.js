;!function (users) {

  let userService = {};

  userService.setUser = (user) => {

    //<-- check user exist -->
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/user', false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(user));

    if (xhr.status == 400) return false;
    return true;
  };

  userService.getUser = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/current_user', false);
    xhr.send();

    return JSON.parse(xhr.responseText)[0];
  };

  userService.removeCurrentUser = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/logout');
    xhr.send();
  };

  userService.getUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/users', false);
    xhr.send();

    users = JSON.parse(xhr.responseText);

    return users;
  };

  window.userService = userService;
}(window.users);
