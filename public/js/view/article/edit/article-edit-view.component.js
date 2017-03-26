;!function () {
  'use strict';

  class ArticleEditViewComponent {

    constructor(article, onAdd, onBack) {
      this.article = article;
      this.onAdd = onAdd;
      this.onBack = onBack;
    }

    render() {

      let article = this.article;

      let tags = "";
      article.tags.forEach((elem) => {
        tags += elem + " ";
      });

      let view = '<input class="tags-input" type="text" value="' + tags + '"/>' +
        '<div class="clear"></div>' +
        '<input class="title-input" type="text" value="' + article.title + '"/>' +
        '<div class="clear"></div>' +
        '<input class="summary-input" type="text" value="' + article.summary + '"/>' +
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
        '<div class="add-input">' +
        '<input type="button" value="add"/>' +
        '</div>' +
        '<div class="back-button">' +
        '<input type="button" value="back"/>' +
        '</div>';

      let editElement = document.createElement('div');
      editElement.className = 'edit-article-view';
      editElement.id = 'article-' + this.article.id;
      editElement.innerHTML = view;
      editElement.querySelector('div.add-input').addEventListener('click', this.onAddClicked.bind(this));
      editElement.querySelector('div.back-button').addEventListener('click', this.onBackClicked.bind(this));

      return editElement;
    }

    onAddClicked() {
      this.onAdd(this.fetchFormData());
    }

    onBackClicked() {
      this.onBack();
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
      articleUpdated.author = articleEl.querySelector('a.href-news-author').innerText;
      articleUpdated.createdAt = new Date(articleEl.querySelector('div.detail-news-date').innerText);
      return articleUpdated;
    }
  }

  window.ArticleEditViewComponent = ArticleEditViewComponent;
}();
