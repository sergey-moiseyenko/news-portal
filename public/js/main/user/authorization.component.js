;!function () {

  class AuthorizationComponent {

    render() {
      let authorizationView = new AuthorizationViewComponent(this.onSignInClicked.bind(this)).render();
      let signInCell = document.querySelector('div.sign-in-out-cell');
      signInCell.innerHTML = '';
      signInCell.appendChild(authorizationView);
    }

    onSignInClicked(user) {
      if (!user) return;
      userService.addUser(user);
      let logInCell = document.querySelector('div.sign-in-out-cell');
      logInCell.innerHTML = '<label class="user-name">'+ user.name +'</label>' +
        '<input type="button" class="sign-in-button" value="sing out"/>';
      logInCell.querySelector('input.sign-in-button').addEventListener('click', this.signOutClicked.bind(this));
      domService.usersConfig();
    }

    onload() {
      let user = userService.getUser();
      if (!user) {
        domService.usersConfig();
        return;
      }

      let logInCell = document.querySelector('div.sign-in-out-cell');
      logInCell.innerHTML = '<label class="user-name">'+ user.name +'</label>' +
        '<input type="button" class="sign-in-button" value="sing out"/>';
      logInCell.querySelector('input.sign-in-button').addEventListener('click', this.signOutClicked.bind(this));
      domService.usersConfig();
    }

    signOutClicked() {
      userService.removeUser();
      let logInCell = document.querySelector('div.sign-in-out-cell');
      logInCell.innerHTML = '<label class="user-name"></label>' +
        '<input type="button" class="sign-in-button" value="sing in"/>';
      logInCell.querySelector('input.sign-in-button').addEventListener('click', this.render.bind(this));
      domService.usersConfig();
    }
  }


  window.AuthorizationComponent = AuthorizationComponent;
}();