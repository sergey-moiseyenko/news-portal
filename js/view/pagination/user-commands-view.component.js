;!function () {

  class UserCommandsViewComponent {

    constructor(onload) {
      this.onload = onload;
    }

    render() {
      let view = '<div class="add-news-button article-expanded">'+
        '<input type="button" value="add news" onclick="new ArticleEditPageComponent().render()"/>'+
        '</div>' +
        '<div class="clear"></div>'+
        '<div class="load-more-button">'+
        '<input type="button" value="load more"/>'+
        '</div>';

      let userCommandsElem = document.createElement('div');
      userCommandsElem.classList.add('user-commands');
      userCommandsElem.innerHTML = view;
      userCommandsElem.querySelector('load-more-button').addEventListener('click', this.onloadClicked.bind(this));

      return userCommandsElem;
    }

    onloadClicked() {
      this.onload();
    }
  }

  window.UserCommandsViewComponent = UserCommandsViewComponent;
}();