;!function () {

  window.editArticleView = (article) => {

    let tags = "";
    article.tags.forEach((elem) => {
      tags += elem + " ";
    });

    let view = '<div class = "add-news-frame = detail-news">'+
      '<input class="tags-input" type="text" value="'+ tags +'"/>' +
      '<div class="clear"></div>' +
      '<input class="title-input" type="text" value="'+ article.title +'"/>' +
      '<div class="clear"></div>' +
      '<input class="summary-input" type="text" value="'+ article.summary +'"/>' +
      '<div class="clear"></div>' +
      '<input class="author-input" type="text" value="' + article.author + '"/>' +
      '<div class="clear"></div>' +
      '<input class="date-input" type="text" value="' + article.createdAt + '"/>' +
      '<div class="clear"></div>' +
      '<div class="detail-news-photo">' +
      '</div>' +
      '<div class="clear"></div>' +
      '<textarea class="content-input" value="' + article.content + '"></textarea>' +
      '<div class="clear"></div>' +
      '<input class="add-input" type="button" value="add"/>' +
      '</div>';

    return view;
  };
}();
