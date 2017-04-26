;!function (users, PromiseWrapper) {

  let userService = {};

  userService.setUser = (user) => {

    if (!user) user = JSON.parse(localStorage.getItem('user')) || {};

    onload = (resolve, xhr) => {
      if (xhr.status === 200) {
        localStorage.clear();
        localStorage.setItem('user', xhr.responseText);
        resolve(true);
      }
      else resolve(false);
    };

    return new PromiseWrapper('http://localhost:3000/user/user', onload).basicAuth(user.username + ":" + user.password);
  };

  userService.getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  userService.removeCurrentUser = () => {
    localStorage.clear();
  };

  window.userService = userService;
}(window.users, window.PromiseWrapper);
