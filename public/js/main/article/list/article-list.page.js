;!function (articleService, ArticleListViewComponent) {

  class ArticleListPageComponent {

    //articleService.getArticles(0, 10)

    constructor(articles) {
      this.articles = articles;
    }

    init(articles, filter = {}) {
      if (!articles) {
        articleService.getArticles(0, 10, filter).then(articles => {
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
