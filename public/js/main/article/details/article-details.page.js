;!function (ArticleDetailViewComponent, articleService) {
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

      //<-- set up callback for promise -->

      //let promise = articleService.getArticlesFromDb();
      //promise.then((articles) => {
       // new ArticleListPageComponent(articles).render();
       // new UserCommandsViewComponent()
      //});

      //<-- end of promise -->

      new ArticleListPageComponent(articleService.getArticlesFromDb()).render();
      new UserCommandsComponent().render();
    }
  }

  window.ArticleDetailPageComponent = ArticleDetailPageComponent;
}(window.ArticleDetailViewComponent, window.articleService);
