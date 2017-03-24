;!function () {

  class UserCommandsComponent {

    render() {
      let userCommandsView = new UserCommandsViewComponent().render();
      let content = document.querySelector('div.content');
      content.appendChild(userCommandsView);
      domService.usersConfig();
    }

    onloadClicked() {

    }
  }

  window.UserCommandsComponent = UserCommandsComponent;
}();