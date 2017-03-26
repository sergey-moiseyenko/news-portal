;!function (ArticleEditViewComponent) {
  'use strict';

  class ArticleAddViewComponent extends ArticleEditViewComponent{

    constructor(article, onAdd, onBack) {
      super(article, onAdd, onBack);
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
      addArticleElement.id = 'article-' + this.article.id;
      addArticleElement.innerHTML = view;
      addArticleElement.querySelector('input.add-input').addEventListener('click', this.onAddClicked.bind(this));
      addArticleElement.querySelector('div.back-button').addEventListener('click', this.onBackClicked.bind(this));

      return addArticleElement;
    }

    fetchFormData() {
      let articleEl = document.querySelector('div#article-' + this.article.id);
      if (!articleEl) return;

      let articleUpdated = {};
      articleUpdated.id = this.article.id;
      articleUpdated.summary = articleEl.querySelector('input.summary-input').value;
      articleUpdated.title = articleEl.querySelector('input.title-input').value;
      articleUpdated.content = articleEl.querySelector('textarea.content-input').value;
      articleUpdated.tags = articleEl.querySelector('input.tags-input').value.split(' ');
      articleUpdated.author = articleEl.querySelector('input.author-input').value;
      articleUpdated.createdAt = new Date();
      return articleUpdated;
    }
  }

  window.ArticleAddViewComponent = ArticleAddViewComponent;
}(window.ArticleEditViewComponent);
