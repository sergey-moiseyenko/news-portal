;!function (userService, domService) {

  class AuthorizationComponent {

    render() {
      let authorizationView = new AuthorizationViewComponent(this.onSignInClicked.bind(this)).render();
      let signInCell = document.querySelector('div.sign-in-out-cell');
      signInCell.innerHTML = '';
      signInCell.appendChild(authorizationView);
    }

    onSignInClicked(user) {

      // <-- check user exist -->

      userService.setUser(user).then((isExist) => {
        console.log(isExist);
        if (!isExist) return;

        let logInCell = document.querySelector('div.sign-in-out-cell');
        logInCell.innerHTML = '<label class="user-name">' + user.username + '</label>' +
          '<input type="button" class="sign-in-button" value="sing out"/>';
        logInCell.querySelector('input.sign-in-button').addEventListener('click', this.signOutClicked.bind(this));
        domService.usersConfig();
      });
    }

    init() {
      userService.isLogin().then((user) => {
        this.onload(user);
      });
    }

    onload(user) {

      if (!user.username) return;

      let logInCell = document.querySelector('div.sign-in-out-cell');
      logInCell.innerHTML = '<label class="user-name">' + user.username + '</label>' +
        '<input type="button" class="sign-in-button" value="sing out"/>';
      logInCell.querySelector('input.sign-in-button').addEventListener('click', this.signOutClicked.bind(this));
    }

    signOutClicked() {
      userService.removeCurrentUser();
      let logInCell = document.querySelector('div.sign-in-out-cell');
      logInCell.innerHTML = '<label class="user-name"></label>' +
        '<input type="button" class="sign-in-button" value="sing in"/>';
      logInCell.querySelector('input.sign-in-button').addEventListener('click', this.render.bind(this));
      domService.usersConfig();
    }
  }


  window.AuthorizationComponent = AuthorizationComponent;
}(window.userService, window.domService);
