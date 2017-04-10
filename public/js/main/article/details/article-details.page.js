;!function (ArticleDetailViewComponent, articleService) {
  'use strict';

  class ArticleDetailPageComponent {

    constructor(articleId) {
      this.articleId = articleId;
    }

    render() {

      articleService.getArticle(this.articleId).then(article => {
        let content = document.querySelector('div.content');
        content.innerHTML = '';
        let detailArticleElement = new ArticleDetailViewComponent(article, this.onBackClicked);
        content.appendChild(detailArticleElement.render());
      });
    }

    onBackClicked() {

      //<-- set up callback for promise -->

      articleService.getArticlesFromDb().then(articles => {
        new ArticleListPageComponent(articles).render();
        new UserCommandsViewComponent()
      });

      //<-- end of promise -->

      //new ArticleListPageComponent(articleService.getArticlesFromDb()).render();
      //new UserCommandsComponent().render();
    }
  }

  window.ArticleDetailPageComponent = ArticleDetailPageComponent;
}(window.ArticleDetailViewComponent, window.articleService);
