;!function () {

  window.signInOutView = (user) => {
    let view = '<label class="user-name">'+ user.name +'</label>' +
    '<input type="button" class="sign-in-button" value="sing out" onclick="window.pageController.logInOutFrame(event)"/>';

    return view;
  }
}();