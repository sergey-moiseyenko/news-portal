;!function (users, PromiseWrapper) {

  let userService = {};

  userService.setUser = (user) => {

    //<-- check user exist -->

    let onload = (resolve, xhr) => {
      if (xhr.status == 400) resolve(false);
      else resolve(true);
    };

    return new PromiseWrapper('http://localhost:3000/user', onload).post(user);
  };

  userService.getUser = () => {

    let onload = (resolve, xhr) => {
      resolve(JSON.parse(xhr.responseText)[0]);
    };

    return new PromiseWrapper('http://localhost:3000/current_user', onload).get();
  };

  userService.removeCurrentUser = () => {

    let onload = (resolve) => {
      resolve();
    };

    return new PromiseWrapper('http://localhost:3000/logout', onload).delete();
  };

  window.userService = userService;
}(window.users, window.PromiseWrapper);
