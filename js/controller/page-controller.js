;!function (views, domService, articleService) {

  let pageController = {};

  window.onload = domService.setDataAfterLoad;

  pageController.logInOutFrame = (event) => {

    let logInButton = document.querySelector('div.sign-in-out-cell');
    if (event.target.value === 'sing in') {
      logInButton.innerHTML = views.authorizationView();
    }else {
      let label = logInButton.querySelector('label.user-name');
      label.innerHTML = "";
      event.target.value = "sing in";
      userService.removeUser();
      domService.usersConfig(document.querySelector('div.news-list'), event.target.value);
    }
  };

  pageController.addArticleFrame = (event) => {
    let content = document.querySelector('div.content');
    content.innerHTML = views.addArticleView();
  };

  pageController.editArticleFrame = (event) => {
    let target = event.target;
    while (target.className !== 'news') target = target.parentNode;
    let content = document.querySelector('div.content');
    content.innerHTML = views.editArticleView(articleService.getArticle(target.id));
  };

  pageController.deleteArticle = (event) => {
    let target = event.target;
    while(target.className !== 'news') target = target.parentNode;
    domService.deleteNews(target.id);
  };

  pageController.showArticle = (event) => {
    let target = event.target;
    while(target.className !== 'news') target = target.parentNode;
    let content = document.querySelector('div.content');
    domService.showNews(articleService.getArticle(target.id));
  };

  pageController.backButtonListener = (event) => {
    domService.setDataAfterLoad();
  };

  pageController.filterMenuButton = (event) => {
    domService.showFilterMenu();
  };

  pageController.loadMorButtonListener = (event) => {
    domService.loadArticles();
  };

  window.pageController = pageController;
}(window.views, window.domService, window.articleService);
