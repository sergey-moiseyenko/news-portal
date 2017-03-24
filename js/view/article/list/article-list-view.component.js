;!function (ArticleListItemViewComponent) {

  class ArticleListViewComponent {

    constructor(articles, onDelete) {
      this.articles = articles;
      this.onDelete = onDelete;
    }

    render() {
      let listElement = document.createElement('div');
      listElement.className = 'news-list';
      listElement.id = 'news-list-id';
      this.articles.forEach(article => {
        let articleElement = new ArticleListItemViewComponent(article, this.onDeleteClicked.bind(this)).render();
        listElement.appendChild(articleElement);
      });

      return listElement;
    }

    onDeleteClicked(id) {
      this.onDelete(id);
    }
  }

  window.ArticleListViewComponent = ArticleListViewComponent;
}(window.ArticleListItemViewComponent);
