;!function () {

  window.userCommandsView = () => {
    let view = '<div class="add-news-button article-expanded">'+
      '<input type="button" value="add news" onclick="window.pageController.addArticleFrame(event)"/>'+
      '</div>' +
      '<div class="clear"></div>'+
      '<div class="load-more-button" onclick="window.pageController.loadMorButtonListener(event)">'+
      '<input type="button" value="load more"/>'+
      '</div>';

    return view;
  };

}();
