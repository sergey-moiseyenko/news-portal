;!function (articleService, ArticleEditViewComponent, domService) {
  'use strict';

  class ArticleEditPageComponent {

    constructor(articleId) {
      this.articleId = articleId;
    }

    render() {
      let article = articleService.getArticle(this.articleId);
      let content = document.querySelector('div.content');
      content.innerHTML = '';
      let editComponent = new ArticleEditViewComponent(article, this.onArticleAdd, this.onBack);
      content.appendChild(editComponent.view());
    }

    onArticleAdd(articleUpdated) {
      articleService.editArticle(articleUpdated.id, articleUpdated);
      domService.setContent(document.querySelector('div.content'));
    }

    onBack() {
      domService.setDataAfterLoad();
    }
  }

  window.ArticleEditPageComponent = ArticleEditPageComponent;
}(window.articleService, window.ArticleEditViewComponent, window.domService);
