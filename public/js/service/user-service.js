;!function (users) {

  let userService = {};

  userService.setUser = (user) => {

    //<-- check user exist -->

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:3000/user', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(user));

      xhr.onload = () => {
        if (xhr.status == 400) resolve(false);
        else resolve(true);
      }
    });
  };

  userService.getUser = () => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:3000/current_user', true);
      xhr.send();

      xhr.onload = () => {
        console.log(xhr.responseText);
        resolve(JSON.parse(xhr.responseText)[0]);
      }
    });
  };

  userService.removeCurrentUser = () => {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('DELETE', 'http://localhost:3000/logout', true);
      xhr.send();

      xhr.onload = () => {
        resolve();
      }
    });
  };

  window.userService = userService;
}(window.users);
