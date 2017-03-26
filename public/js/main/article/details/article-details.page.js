;!function (ArticleDetailViewComponent, articleService, domService) {
  'use strict';

  class ArticleDetailPageComponent {

    constructor(articleId) {
      this.articleId = articleId;
    }

    render() {
      let content = document.querySelector('div.content');
      content.innerHTML = '';
      let detailArticleElement = new ArticleDetailViewComponent(articleService.getArticle(this.articleId), this.onBackClicked);
      content.appendChild(detailArticleElement.render());
    }

    onBackClicked() {
      new ArticleListPageComponent(articles).render();
      new UserCommandsComponent().render();
    }
  }

  window.ArticleDetailPageComponent = ArticleDetailPageComponent;
}(window.ArticleDetailViewComponent, window.articleService, window.domService);
