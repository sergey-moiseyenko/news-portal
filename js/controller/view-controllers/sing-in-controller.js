;!function (users, userService) {

  let singInController = {};

  singInController.singInButtonListener = (event) => {

    let user = {};
    let singInFrame = document.querySelector('form.sing-in-frame');

    user.name = singInFrame.querySelector('input.user-name-input').value;
    user.password = singInFrame.querySelector('input.user-password-input').value;

    userService.addUser(user);
    domService.upDateAfterAuthorization(user);
  };

  window.singInController = singInController;
}(window.users, window.userService);
