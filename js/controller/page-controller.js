;!function (domService, articleService) {

  let pageController = {};

  window.onload = domService.setDataAfterLoad;

  pageController.logInOutFrame = (event) => {
    domService.logInOutFrame(event);
  };

  pageController.addArticleFrame = () => {
    domService.addArticleFrame();
  };

  pageController.editArticleFrame = (event) => {
    domService.editArticleFrame(event);
  };

  pageController.deleteArticle = (event) => {
    let target = event.target;
    while (target.className !== 'news') target = target.parentNode;
    domService.deleteNews(target.id);
  };

  pageController.showArticle = (event) => {
    let target = event.target;
    while (target.className !== 'news') target = target.parentNode;
    let content = document.querySelector('div.content');
    domService.showNews(articleService.getArticle(target.id));
  };

  pageController.backButtonListener = () => {
    domService.setDataAfterLoad();
  };

  pageController.filterMenuButton = () => {
    domService.showFilterMenu();
  };

  pageController.loadMorButtonListener = () => {
    domService.loadArticles();
  };

  window.pageController = pageController;
}(window.domService, window.articleService);
