;!function (users, PromiseWrapper) {

  let userService = {};

  userService.setUser = (user) => {

    let onload = (resolve, xhr) => {
      if (xhr.status === 200) resolve(true);
      else resolve(false);
    };

    return new PromiseWrapper('http://localhost:3000/user/user', onload).post(user);
  };

  userService.getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
  };

  userService.removeCurrentUser = () => {
    let onload = (resolve) => {
      resolve();
    };

    return new PromiseWrapper('http://localhost:3000/user/logout', onload).delete();
  };

  userService.isLogin = () => {
    let onload = (resolve, xhr) => {
      if(xhr.status === 401) resolve({});
      else {
        let user = {};
        user.username = xhr.responseText;
        resolve(user);
      }
    };

    return new PromiseWrapper('http://localhost:3000/user/isLogin', onload).get();
  };

  window.userService = userService;
}(window.users, window.PromiseWrapper);
