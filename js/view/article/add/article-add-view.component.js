;!function () {
  'use strict';

  class ArticleAddViewComponent {

    constructor(onAdd, onBack) {
      this.onAdd = onAdd;
      this.onBack = onBack;
    }

    render() {
      let view = '<input class="tags-input" type="text" placeholder="tags"/>' +
        '<div class="clear"></div>' +
        '<input class="title-input" type="text" placeholder="title"/>' +
        '<div class="clear"></div>' +
        '<input class="summary-input" type="text" placeholder="summary"/>' +
        '<div class="clear"></div>' +
        '<input class="author-input" type="text" placeholder="author"/>' +
        '<div class="clear"></div>' +
        '<div class="detail-news-photo">' +
        '</div>' +
        '<div class="clear"></div>' +
        '<textarea class="content-input" placeholder="content"></textarea>' +
        '<div class="clear"></div>' +
        '<input class="add-input" type="button" value="add"/>' +
        '<div class="back-button">'+
        '<input type="button" value="back"/>'+
        '</div>';

      let addArticleElement = document.createElement('div');
      addArticleElement.className = 'add-news-frame';
      addArticleElement.innerHTML = view;
      addArticleElement.querySelector('input.add-input').addEventListener('click', this.onAddClicked.bind(this));
      addArticleElement.querySelector('div.back-button').addEventListener('click', this.onBackClicked.bind(this));
      this.addArticleElement = addArticleElement;

      return addArticleElement;
    }

    onAddClicked() {

      let element = this.addArticleElement.querySelector('input.tags-input');
      let article = {};

      article.id = Math.random().toString();
      let tags = element.value;
      article.tags = tags.split(' ');
      element = this.addArticleElement.querySelector('input.title-input');
      article.title = element.value;
      element = this.addArticleElement.querySelector('input.summary-input');
      article.summary = element.value;
      element = this.addArticleElement.querySelector('input.author-input');
      article.author = element.value;
      article.createdAt = new Date();
      element = this.addArticleElement.querySelector('textArea.content-input');
      article.content = element.value;

      this.onAdd(article);
    }

    onBackClicked() {
      this.onBack();
    }
  }

  window.ArticleAddViewComponent = ArticleAddViewComponent;
}();
