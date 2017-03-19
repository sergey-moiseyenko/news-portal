;!function (states, views, domService, articleService) {

  let pageListener = {};

  window.onload = domService.upToDate;

  pageListener.logInOutFrame = (event) => {

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

  pageListener.addArticleFrame = (event) => {
    let content = document.querySelector('div.content');
    states.unshift(content);
    content.innerHTML = views.addArticleView();
  };

  pageListener.editArticleFrame = (event) => {
    let target = event.target;
    while (target.className !== 'news') target = target.parentNode;
    let content = document.querySelector('div.content');
    states.unshift(content);
    content.innerHTML = views.editArticleView(articleService.getArticle(target.id));
  };

  pageListener.deleteArticleInList = (event) => {
    let target = event.target;
    while(target.className !== 'news') target = target.parentNode;
    domService.deleteNews(target.id);
  };

  pageListener.showArticle = (event) => {
    let target = event.target;
    while(target.className !== 'news') target = target.parentNode;
    let content = document.querySelector('div.content');
    states.unshift(content);
    domService.showNews(articleService.getArticle(target.id));
  };

  pageListener.backButtonListener = (event) => {
    domService.upToDate();
  };

  pageListener.filterMenuButton = (event) => {
    domService.showFilterMenu();
  };

  window.pageListener = pageListener;
}(window.states, window.views, window.domService, window.articleService);
