;!function (articleService, ArticleEditViewComponent, domService, ArticleAddViewComponent) {
  'use strict';

  class ArticleEditPageComponent {

    constructor(articleId) {
      this.articleId = articleId;
      this.article = articleService.getArticle(this.articleId);
    }

    render() {
      let content = document.querySelector('div.content');
      content.innerHTML = '';
      let ComponentConstructor = (this.articleId) ? ArticleEditViewComponent : ArticleAddViewComponent;
      let article = (this.articleId)? this.article : {id: Date.now().toString()};
      let component = new ComponentConstructor(article, this.callback(this.onArticleAdd), this.callback(this.onBack));
      content.appendChild(component.render());
    }

    onArticleAdd(articleUpdated) {
      let serviceFn = (this.articleId)? articleService.editArticle : articleService.addArticle;
      serviceFn.call(articleService, articleUpdated);
      let content = document.querySelector('div.content');
      new ArticleListPageComponent().render(articleService.getArticles(CONFIG.SKIP_DEFAULTS, CONFIG.TOP_DEFAULTS));
      new UserCommandsComponent().render();
    }

    onBack() {
      new ArticleListPageComponent(articles).render();
      new UserCommandsComponent().render();
    }

    callback(fn) {
      return fn.bind(this);
    }
  }

  window.ArticleEditPageComponent = ArticleEditPageComponent;
}(window.articleService, window.ArticleEditViewComponent, window.domService, window.ArticleAddViewComponent);
