;!function (users, userService) {

  let singInListener = {};

  singInListener.singInButtonListener = (event) => {

    let user = {};
    let singInFrame = document.querySelector('form.sing-in-frame');

    user.name = singInFrame.querySelector('input.user-name-input').value;
    user.password = singInFrame.querySelector('input.user-password-input').value;

    userService.addUser(user);
    domService.upToDateAuthorization(user);
  };

  window.singInListener = singInListener;
}(window.users, window.userService);