;!function (ArticleListPageComponent,
            AuthorizationComponent,
            UserCommandsComponent) {

  class Router {

    constructor() {

      this.articleListComponent = new ArticleListPageComponent();
      this.userComponent = new AuthorizationComponent();
      this.userCommands = new UserCommandsComponent();
    }

    routeDefault() {
      this.userComponent.init();
      this.articleListComponent.init();
    }
  }

  const router = new Router();
  window.addEventListener('load', router.routeDefault.bind(router));
}(window.ArticleListPageComponent,
  window.AuthorizationComponent,
  window.UserCommandsComponent);
