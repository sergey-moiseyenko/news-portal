;!function () {

  let contentView = () => {

    let view = '<div class="news-list" id="news-list-id"></div>' +
      '<div class="clear"></div>' +
      '<div class="user-commands">' +
      '<div class="add-news-button article-collapsed">' +
      '<input type="button" value="add news" onclick="window.pageListener.addArticleFrame(event)"/>'+
      '</div>' +
      '<div class="clear"></div>' +
      '<div class="load-more-button">' +
      '<input type="button" value="load more"/>' +
      '</div>';

    return view;
  };

  window.contentView = contentView;
}();