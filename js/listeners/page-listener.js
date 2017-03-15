;!function (states, views, domService, articleService) {

  let pageListener = {};
  let backButton = '<div class="clear"></div>' +
  '<input type="button" value="back"/>';

  pageListener.logInFrameListener = (event) => {
    let logInButton = document.querySelector('div.sign-in-out-cell');
    states.unshift(document.documentElement);
    logInButton.innerHTML = views.authorizationView();
  };

  pageListener.addArticleListener = (event) => {
    let content = document.querySelector('div.content');
    states.unshift(document.documentElement);
    content.innerHTML = views.addArticleView();

  };

  pageListener.editArticleListener = (event) => {
    let target = event.target;
    while (target.className !== 'news') target = target.parentNode
    let content = document.querySelector('div.content');
    states.unshift(content.documentElement);
    content.innerHTML = views.editArticleView(articleService.getArticle(target.id));
  };

  pageListener.deleteArticleListener = (event) => {
    let target = event.target;
    while(target.className !== 'news') target = target.parentNode;
    domService.deleteNews(target.id);
  };

  pageListener.showArticle = (event) => {
    let target = event.target;
    while(target.className !== 'news') target = target.parentNode;
    let content = document.querySelector('div.content');
    states.unshift(content.documentElement);
    domService.showNews(articleService.getArticle(target.id));
  };

  window.pageListener = pageListener;
}(window.states, window.views, window.domService, window.articleService);
