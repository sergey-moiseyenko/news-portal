;!function () {

  window.editArticleView = (article) => {

    let tags = "";
    article.tags.forEach((elem) => {
      tags += elem + " ";
    });

    let view = '<div class = "edit-article-view" id="'+article.id+'">'+
      '<input class="tags-input" type="text" value="'+ tags +'"/>' +
      '<div class="clear"></div>' +
      '<input class="title-input" type="text" value="'+ article.title +'"/>' +
      '<div class="clear"></div>' +
      '<input class="summary-input" type="text" value="'+ article.summary +'"/>' +
      '<div class="clear"></div>' +
      '<div class="detail-news-author">' +
      '<a class="href-news-author"><b>' + article.author + '</b></a>' +
      '</div>' +
      '<div class="clear"></div>' +
      '<div class="detail-news-date">' +
      '<span>' + article.createdAt + '</span>' +
      '</div>' +
      '<div class="clear"></div>' +
      '<div class="detail-news-photo">' +
      '</div>' +
      '<div class="clear"></div>' +
      '<textarea class="content-input">' + article.content + '</textarea>' +
      '<div class="clear"></div>' +
      '<div class="add-input">'+
      '<input type="button" value="add" onclick="window.editViewListener.addButtonListener(event)"/>' +
      '</div>'+
      '<div class="back-button">'+
      '<input type="button" value="back" onclick="window.pageListener.backButtonListener(event)"/>'+
      '</div>' +
      '</div>';

    return view;
  };
}();
