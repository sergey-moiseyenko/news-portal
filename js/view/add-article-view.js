;!function (vc) {

  window.addArticleView = () => {

    let view =  '<div class = "add-news-frame">'+
      '<input class="tags-input" type="text" placeholder="tags"/>' +
      '<div class="clear"></div>' +
      '<input class="title-input" type="text" placeholder="title"/>' +
      '<div class="clear"></div>' +
      '<input class="summary-input" type="text" placeholder="summary"/>' +
      '<div class="clear"></div>' +
      '<input class="author-input" type="text" placeholder="author"/>' +
      '<div class="clear"></div>' +
      '<input class="date-input" type="text" placeholder="date"/>' +
      '<div class="clear"></div>' +
      '<div class="detail-news-photo">' +
      '</div>' +
      '<div class="clear"></div>' +
      '<textarea class="content-input" placeholder="content"></textarea>' +
      '<div class="clear"></div>' +
      '<input class="add-input" type="button" value="add" onclick="window.addViewController.addButtonListener(event)"/>' +
      '<div class="back-button">'+
      '<input type="button" value="back" onclick="window.addViewController.backButtonListener(event)"/>'+
      '</div>'+
      '</div>';

    return view;
  }
}(window.addViewController);
