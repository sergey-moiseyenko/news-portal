;!function (domService) {

  let addViewListener = {};

  addViewListener.addButtonListener = (event) => {

    let target = event.target;
    while (target != null && target.className !== 'add-news-frame') target = target.parentNode;

    let element = target.querySelector('input.tags-input');
    let article = {};
    article.id = '10';
    let tags = element.value;
    article.tags = [];
    article.tags.push(tags);
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

  window.addViewListener = addViewListener;
}(window.domService);
