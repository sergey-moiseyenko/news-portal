;!function (domService) {

  class UserCommandsComponent {

    constructor(top) {
      this.top = top;
    }

    render() {
      let userCommandsView = new UserCommandsViewComponent(this.onloadClicked.bind(this)).render();
      let content = document.querySelector('div.content');
      console.log(content.appendChild(userCommandsView));
      console.log(content);
      domService.usersConfig();
    }

    onloadClicked() {
      this.top += this.top;
      new ArticleListPageComponent(articleService.getArticles(CONFIG.SKIP_DEFAULTS, top));
    }
  }

  window.UserCommandsComponent = UserCommandsComponent;
}(window.domService);
