;!function () {

  window.detailArticleView = (article) => {
    let view = "<div class = \"detail-news\">" +
      "<div class=\"detail-news-tag\"><em><a>" + article.tags + "</a></em></div>" +
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
      "<div class=\"detail-news-content\">" + article.content +"</div>" +
      "<div class=\"clear\"></div>" +
      "</div>";
    return view;
  };
}();

//TODO : add-news button, css-classes, tags, refactoring code