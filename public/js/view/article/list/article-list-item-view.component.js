;!function () {

  class ArticleListItemViewComponent {

    constructor(article, onDelete) {
      this.article = article;
      this.onDelete = onDelete;
    }

    render() {
      let article = this.article;
      let tags = "";
      article.tags.forEach((elem) => {
        tags += "<em><a>" + elem + "</a></em> ";
      });

      let view = "<div class=\"news-title\">" +
        "<strong>" + article.title + "</strong>" +
        "</div>" +
        "<div class=\"news-photo\" onclick='new ArticleDetailPageComponent(" + "\"" + article.id + "\"" + ").render()'>" +
        "<img src=\"../UI/images/Taylor-News.jpg\"/>" +
        "</div>" +
        "<div class=\"news-tag\">" + tags + "</div>" +
        "<div class=\"news-description\">" + article.summary + "</div>" +
        "<div class=\"news-author\">" +
        "<a class=\"href-news-author\"><b>" + article.author + "</b></a>" +
        "</div>" +
        "<div class=\"news-date\">" +
        "<span>" + article.createdAt.toDateString() + "</span>" +
        "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class='edit-news-button' onclick='new ArticleEditPageComponent(" + "\"" + article.id + "\"" + ").render()'>" +
        "<input type='button' value='edit'/>" +
        "</div>" +
        "<div class='delete-news-button'>" +
        "<input type='button' value='delete'>" +
        "</div>" +
        "<div class=\"clear\"></div>";

      let articleElement = document.createElement('div');
      articleElement.className = 'news';
      articleElement.id = article.id;
      articleElement.innerHTML = view;

      let deleteButton = articleElement.querySelector('div.delete-news-button');
      deleteButton.addEventListener('click', this.onDeleteClicked.bind(this));

      return articleElement;
    }

    onDeleteClicked() {
      this.onDelete(this.article.id);
    }
  }

  window.ArticleListItemViewComponent = ArticleListItemViewComponent;
}();
