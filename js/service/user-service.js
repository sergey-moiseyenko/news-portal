;! function (users) {

  let userService = {};

  userService.addUser = (user) => {
    users.unshift(user);
    localStorage.setItem('users', JSON.stringify(users));
  };

  userService.removeUser = () => {
    users.shift();
    if (!users) localStorage.removeItem('users');
    else localStorage.setItem('users', JSON.stringify(users));
  };

  userService.getUser = () => { return users[0]; };

  window.userService = userService;
}(window.users);