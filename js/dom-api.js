;!function (articleService) {

  'use strict';

  let domService = {};

  domService.showNews = (article) => {
    let detailArticle = window.detailArticleView(article);
    let content = document.getElementById('content-id');
    content.innerHTML = detailArticle;
    let element = document.querySelector('div.user-commands');
    let pageElement = document.querySelector('div.main-page');
    pageElement.removeChild(element);
  };

  domService.addNews = article => {
    if(!window.articleService.isArticleValid(article)) return false;
    articleService.addArticle(article);
    let articleView = window.articleView.view(article);
    let news = document.createElement('div');
    news.className = 'news';
    news.id = article.id;
    news.innerHTML = articleView;
    let newsList = document.querySelector('div.news-list');
    newsList.insertBefore(news, newsList.firstChild);
    return true;
  };

  domService.deleteNews = id => {

    if (!articleService.removeArticle(id)) return false;
    let article = document.getElementById(id);
    if (article) {
      let newsListDiv = document.getElementById('news-list-id');
      newsListDiv.removeChild(article);
    }
    return true;
  };

  domService.editNews = id => {
    let article = document.getElementById(id);
    if (!article) return false;
    if (!articleService.editArticle(id, {title:'edit title'})) return false;
    let editArticle = articleService.getArticle(id);
    let editElement = getDomElement(window.articleView.view(editArticle), editArticle);
    let currentElem = document.getElementById(id);
    let newsList = document.querySelector('div.news-list');
    newsList.insertBefore(editElement, currentElem);
    newsList.removeChild(currentElem);
    return true;
  };

  function getDomElement(articleView, article) {
    let element = document.createElement('div');
    element.className = 'news';
    element.id = article.id;
    element.innerHTML = articleView;
    return element;
  }

  //press sing in or sing out button to check

  domService.usersConfig = (value) => {
    let singButton = document.querySelector('input.sign-in-button');
    let label = document.querySelector('label.user-name');

    if (value === 'sing in') {
      label.innerHTML = 'Sergey';
      singButton.value = 'sing out';
      let editButtons = document.querySelectorAll('div.edit-news-button');
      let deleteButtons = document.querySelectorAll('div.delete-news-button');
      editButtons.forEach(function (elem) {
        elem.classList.remove('article-expanded');
        elem.classList.add('article-collapsed');
      });
      deleteButtons.forEach(function (elem) {
        elem.classList.remove('article-expanded');
        elem.classList.add('article-collapsed');
      });
      return;
    }

    label.innerHTML = '';
    singButton.value = 'sing in';
    let editButtons = document.querySelectorAll('div.edit-news-button');
    let deleteButtons = document.querySelectorAll('div.delete-news-button');
    editButtons.forEach(function (elem) {
      elem.classList.remove('article-collapsed');
      elem.classList.add('article-expanded');
    });
    deleteButtons.forEach(function (elem) {
      elem.classList.remove('article-collapsed');
      elem.classList.add('article-expanded');
    });
  };

  domService.removeTag = (tagName, article) => {
    if(!articleService.removeTag(tagName, article)) return false;
    let newsElement = document.getElementById(article.id);
    if (!newsElement) return false;
    let tagElement = newsElement.querySelector('div.news-tag');
    tagElement.innerHTML = "<div class=\"news-tag\"><em><a>" + article.tags + "</a></em></div>";
    return true;
  };

  domService.addTag = (tagName, article) => {
    if(!articleService.addTag(tagName, article)) return false;
    let newsElement = document.getElementById(article.id);
    if(!newsElement) return false;
    let tagElement = newsElement.querySelector('div.news-tag');
    tagElement.innerHTML = "<div class=\"news-tag\"><em><a>" + article.tags + "</a></em></div>";
    return true;
  };

  window.domService = domService;

}(window.articleService);
