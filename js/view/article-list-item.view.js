;!function () {

  window.articleView = (article) => {

    let tags = "";
    article.tags.forEach((elem) => {
      tags += "<em><a>" + elem + "</a></em> ";
    });

    let view = "<div class=\"news-title\">" +
      "<strong>" + article.title + "</strong>" +
      "</div>" +
      "<div class=\"news-photo\">" +
      "<img src=\"../images/Taylor-News.jpg\"/>" +
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
      "<div class='edit-news-button'>" +
      "<input type='button' value='edit'/>" +
      "</div>" +
      "<div class='delete-news-button'>" +
      "<input type='button' value='delete'>" +
      "</div>" +
      "<div class=\"clear\"></div>";

    return view;
  };
}();
