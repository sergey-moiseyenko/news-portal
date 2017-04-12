;!function (articleService, ArticleEditViewComponent, domService, ArticleAddViewComponent) {
  'use strict';

  class ArticleEditPageComponent {

    constructor(articleId) {
      this.articleId = articleId;
      //this.article = articleService.getArticle(this.articleId);
    }

    render() {

      articleService.getArticle(this.articleId).then(article => {
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
      serviceFn.call(articleService, articleUpdated).then(() => {
        let content = document.querySelector('div.content');
          new ArticleListPageComponent().init();
      });
    }

    onBack() {
      new ArticleListPageComponent().init();
    }

    callback(fn) {
      return fn.bind(this);
    }
  }

  window.ArticleEditPageComponent = ArticleEditPageComponent;
}(window.articleService, window.ArticleEditViewComponent, window.domService, window.ArticleAddViewComponent);
