;!function (articleService, ArticleListViewComponent) {

  class ArticleListPageComponent {

    //articleService.getArticles(0, 10)

    constructor(articles) {
      this.articles = articles;
    }

    render() {

      articleService.getArticlesFromDb().then(articles => {
        let articleList = new ArticleListViewComponent(articles, this.onDeleteClicked.bind(this)).render();
        let content = document.querySelector('div.content');
        content.innerHTML = '';
        content.appendChild(articleList);
        new UserCommandsComponent().render();
      });
    }

    onDeleteClicked(id) {

      articleService.removeArticle(id).then(() => {
        domService.deleteNews(id);
        //this.articles = articleService.getArticles(0, 10);
        //this.render()
      });
    }

    callback(fn) {
      return fn.bind(this);
    }
  }

  window.ArticleListPageComponent = ArticleListPageComponent;
}(window.articleService, window.ArticleListViewComponent);
