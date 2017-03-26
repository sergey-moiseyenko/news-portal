;!function (articleService, ArticleListViewComponent) {

  class ArticleListPageComponent {

    constructor(articles = articleService.getArticles(0, 10)) {
      this.articles = articles;
    }

    render() {
      let articleList = new ArticleListViewComponent(this.articles, this.onDeleteClicked.bind(this)).render();
      let content = document.querySelector('div.content');
      content.innerHTML = '';
      content.appendChild(articleList);
    }

    onDeleteClicked(id) {
      domService.deleteNews(id);
      this.articles = articleService.getArticles(0, 10);
      this.render();
      new UserCommandsComponent().render();
    }

    callback(fn) {
      return fn.bind(this);
    }
  }

  window.ArticleListPageComponent = ArticleListPageComponent;
}(window.articleService, window.ArticleListViewComponent);
