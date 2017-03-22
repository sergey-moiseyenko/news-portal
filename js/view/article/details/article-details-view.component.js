;!function () {
  'use strict';


  class ArticleDetailViewComponent {

    constructor(article, onBack) {
      this.article = article;
      this.onBack = onBack;
    }

    render() {

      let article = this.article;

      let tags = "";
      article.tags.forEach((elem) => {
        tags += "<em><a>" + elem + "</a></em> ";
      });

      let view = "<div class=\"detail-news-tag\"><em><a>" + tags + "</a></em></div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"detail-news-title\">" +
        "<strong>" + article.title + "</strong>" +
        "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"detail-news-desc\">" + article.summary + "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"detail-news-author\">" +
        "<a class=\"href-news-author\"><b>" + article.author + "</b></a>" +
        "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"detail-news-date\">" +
        "<span>" + article.createdAt + "</span>" +
        "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"detail-news-photo\">" +
        "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"detail-news-content\">" + article.content + "</div>" +
        "<div class=\"clear\"></div>" +
        "<div class=\"back-button\">"+
        "<input type=\"button\" value=\"back\"/>"+
        "</div>";

      let detailElement = document.createElement('div');
      detailElement.className = 'detail-news';
      detailElement.innerHTML = view;
      detailElement.querySelector('div.back-button').addEventListener('click', this.onBackClicked.bind(this));

      return detailElement;
    }

    onBackClicked() {
      this.onBack();
    }
  }

  window.ArticleDetailViewComponent = ArticleDetailViewComponent;
}();
