;!function () {

  window.filterView = () => {

    let view = '<div class="filtration-frame">' +
      '<div class="field">' +
      '<label for="input-tags" class="label-text">Input tags</label>' +
      '<input type="text" id="input-tags" class="input-text" placeholder="Tags"/>' +
      '<div class="clear"></div>' +
      '<div class="select-tags">' +
      '<select>' +
      '<option disabled>Tag list</option>' +
      '</select>' +
      '</div>' +
      '<div class="add-tag-button" onclick="window.filterFrameListener.addButtonListener(event)">' +
      '<input type="button" value="add"/>' +
      '</div>' +
      '</div>'+
      '<div class="clear"></div>' +
      '<div class="field">' +
      '<label for="input-author" class="label-text">Input Author</label>'+
      '<input type="text" id="input-author" class="input-text" placeholder="Author"/>'+
      '</div>'+
      '<div class="field">'+
      '<label for="input-date" class="label-text">Input Date</label>'+
      '<input type="text" id="input-date" class="input-text" placeholder="Date"/>'+
      '</div>' +
      '<div class="filtration-button" onclick="window.filterFrameListener.searchItemListener(event)">' +
      '<button>' +
      'Search' +
      '</button>' +
      '</div>'+
      '</div>';

    return view;
  }
}();