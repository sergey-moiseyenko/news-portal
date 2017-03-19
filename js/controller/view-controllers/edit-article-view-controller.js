;!function (domService) {

  let editViewController = {};

  editViewController.addTagListener = (event) => {

    let article = document.querySelector('div.edit-article-view');
    if (!article) return;

    let editArticle = {};
    editArticle.summary = article.querySelector('input.summary-input').value;
    editArticle.title = article.querySelector('input.title-input').value;
    editArticle.content = article.querySelector('textarea.content-input').value;
    editArticle.tags = [];
    editArticle.tags.push(article.querySelector('input.tags-input').value);

    domService.editNews(article.id, editArticle);
  };

  window.editViewController = editViewController;
}(window.domService);
