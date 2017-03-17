;!function () {

  window.authorizationView = () => {
    let view = "<form class='sing-in-frame' name='sing-in-form'>" +
    "<label class='user-name-label' for='user-name-id'>Name</label>" +
    "<input class='user-name-input' type='text' id='user-name-id'/>" +
    "<div class='clear'></div>" +
    "<label class='user-password-label' for='user-password-id'>Password</label>" +
    "<input class='user-password-input' type='password' id='user-password-id'/>" +
    "<div class='clear'></div>" +
    "<label>Remember me</label>" +
    "<input type='checkbox' id='remember-me-id' checked/>" +
    "<div class='clear'></div>" +
    "<input type='button' value='sing in' onclick='window.singInListener.singInButtonListener(event)'/>" +
    "</form>";

    return view;
  }
}();
