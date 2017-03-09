;!function() {

  let articleView = {};

  articleView.view = (article) => {

    let view = "<div class=\"news-title\">"+
      "<strong>" + article.title + "</strong>" +
      "</div>" +
      "<div class=\"news-photo\">" +
    "<img src=\"../images/Taylor-News.jpg\"/>" +
      "</div>" +
    "<div class=\"news-tag\"><em><a>" + article.tags + "</a></em></div>" +
     "<div class=\"news-description\">"+ article.summary +"</div>" +
    "<div class=\"news-author\">" +
      "<a class=\"href-news-author\"><b>"+ article.author +"</b></a>" +
    "</div>" +
    "<div class=\"news-date\">" +
      "<span>"+ article.createdAt +"</span>" +
    "</div>" +
    "<div class=\"clear\"></div>";

    return view;
  };

  window.articleView = articleView
}();
