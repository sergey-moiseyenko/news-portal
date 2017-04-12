;!function (articleService, ArticleListViewComponent, config) {

  class ArticleListPageComponent {

    constructor(articles) {
      this.articles = articles;
    }

    init(articles, filter = {}) {
      if (!articles) {
        articleService.getArticles(config.SKIP_DEFAULTS, config.TOP_DEFAULTS, filter).then(articles => {
          this.articles = articles;
          this.render();
        });
        return;
      }
      this.render(articles);
    }

    render() {

        let articleList = new ArticleListViewComponent(this.articles, this.onDeleteClicked.bind(this)).render();
        let content = document.querySelector('div.content');
        content.innerHTML = '';
        content.appendChild(articleList);
        new UserCommandsComponent().render();
    }

    onDeleteClicked(id) {

      articleService.removeArticle(id).then(() => {
        domService.deleteNews(id);
      });
    }

    callback(fn) {
      return fn.bind(this);
    }
  }

  window.ArticleListPageComponent = ArticleListPageComponent;
}(window.articleService, window.ArticleListViewComponent, window.CONFIG);
