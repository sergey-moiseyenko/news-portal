;!function () {

  class AuthorizationViewComponent {

    constructor(onSignIn) {
      this.onSignIn = onSignIn;
    }

    render() {

      let view = "<label class='user-name-label' for='user-name-id'>Name</label>" +
        "<input class='user-name-input' type='text' id='user-name-id'/>" +
        "<div class='clear'></div>" +
        "<label class='user-password-label' for='user-password-id'>Password</label>" +
        "<input class='user-password-input' type='password' id='user-password-id'/>" +
        "<div class='clear'></div>" +
        "<label>Remember me</label>" +
        "<input type='checkbox' id='remember-me-id' checked/>" +
        "<div class='clear'></div>" +
        "<input class='sign-in-button' type='button' value='sing in'/>";

      let form = document.createElement('form');
      form.className = 'sing-in-frame';
      form.name = 'sing-in-form';
      form.innerHTML = view;
      form.querySelector('input.sign-in-button').addEventListener('click', this.signInClicked.bind(this));

      return form;
    }

    signInClicked() {
      let user = {};
      let form = document.querySelector('form.sing-in-frame');
      user.username = form.querySelector('input.user-name-input').value;
      user.password = form.querySelector('input.user-password-input').value;
      this.onSignIn(user);
    }
  }

  window.AuthorizationViewComponent = AuthorizationViewComponent;
}();