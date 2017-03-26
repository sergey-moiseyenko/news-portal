;!function () {

  class UserCommandsComponent {

    constructor(top) {
      this.top = top;
    }

    render() {
      let userCommandsView = new UserCommandsViewComponent(this.onloadClicked.bind(this)).render();
      let content = document.querySelector('div.content');
      content.appendChild(userCommandsView);
      domService.usersConfig();
    }

    onloadClicked() {
      this.top += this.top;
      new ArticleListPageComponent(articleService.getArticles(CONFIG.SKIP_DEFAULTS, top));
    }
  }

  window.UserCommandsComponent = UserCommandsComponent;
}();
