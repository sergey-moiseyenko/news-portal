;!function (articleService, ArticleEditViewComponent, domService, ArticleAddViewComponent) {
  'use strict';

  class ArticleEditPageComponent {

    constructor(articleId) {
      this.articleId = articleId;
      //this.article = articleService.getArticle(this.articleId);
    }

    render() {

      let promise = articleService.getArticle(this.articleId);
      promise.then(article => {
        let content = document.querySelector('div.content');
        content.innerHTML = '';
        let ComponentConstructor = (this.articleId) ? ArticleEditViewComponent : ArticleAddViewComponent;
        article = (this.articleId)? article : {id: Date.now().toString()};
        let component = new ComponentConstructor(article, this.callback(this.onArticleAdd), this.callback(this.onBack));
        content.appendChild(component.render());
      });
    }

    onArticleAdd(articleUpdated) {

      let serviceFn = (this.articleId)? articleService.editArticle : articleService.addArticle;
      let promise = serviceFn.call(articleService, articleUpdated);
      promise.then(() => {
        let content = document.querySelector('div.content');
        let promise = articleService.getArticlesFromDb();
        promise.then((articles) => {
          new ArticleListPageComponent().render(articles);
          new UserCommandsComponent().render();
        });
      });
    }

    onBack() {

      //<-- set up callback for promise -->

      let promise = articleService.getArticlesFromDb();
      promise.then((articles) => {
        new ArticleListPageComponent(articles).render();
        new UserCommandsViewComponent()
      });

      //<-- end of promise -->

      //new ArticleListPageComponent(articleService.getArticlesFromDb()).render();
      //new UserCommandsComponent().render();
    }

    callback(fn) {
      return fn.bind(this);
    }
  }

  window.ArticleEditPageComponent = ArticleEditPageComponent;
}(window.articleService, window.ArticleEditViewComponent, window.domService, window.ArticleAddViewComponent);
