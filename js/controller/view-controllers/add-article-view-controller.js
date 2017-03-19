;!function (domService, pageController) {

  let addViewController = {};

  addViewController.addButtonListener = (event) => {

    let target = event.target;
    while (target != null && target.className !== 'add-news-frame') target = target.parentNode;

    let element = target.querySelector('input.tags-input');
    let article = {};
    article.id = Math.random().toString();
    let tags = element.value;
    article.tags = tags.split(' ');
    element = target.querySelector('input.title-input');
    article.title = element.value;
    element = target.querySelector('input.summary-input');
    article.summary = element.value;
    element = target.querySelector('input.author-input');
    article.author = element.value;
    element = target.querySelector('input.date-input');
    article.createdAt = new Date(element.value);
    element = target.querySelector('textArea.content-input');
    article.content = element.value;

    domService.addNews(article);
  };

  addViewController.backButtonListener = (event) => {
    // write backButtonListener window.pageController
    pageController.backButtonListener(event);
  };

  window.addViewController = addViewController;
}(window.domService, window.pageController);
