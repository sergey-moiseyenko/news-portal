;!function (articleService) {
  'use strict';

  const articleView = window.articleView;

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
    article = articleService.addArticle(article);
    if (!article) return;

    let view = articleView(article);
    let news = document.createElement('div');
    news.className = 'news';
    news.id = article.id;
    news.innerHTML = view;
    let newsList = document.querySelector('div.news-list');
    newsList.insertBefore(news, newsList.firstChild);
  };

  domService.deleteNews = id => {
    let article = articleService.removeArticle(id);
    if (!article) return;

    article = document.getElementById(id);
    if (!article) return;

    let newsListDiv = document.getElementById('news-list-id');
    newsListDiv.removeChild(article);
  };

  domService.editNews = id => {
    let article = document.getElementById(id);
    if (!article) return false;
    if (!articleService.editArticle(id, {title: 'edit title'})) return false;
    let editArticle = articleService.getArticle(id);
    let editElement = getDomElement(window.articleView(editArticle), editArticle);
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

  domService.usersConfig = (value) => {
    let signButton = document.querySelector('input.sign-in-button');
    let label = document.querySelector('label.user-name');
    let addButton = document.querySelector('div.add-news-button');

    if (value === 'sign in') {
      label.innerHTML = 'Sergey';
      signButton.value = 'sign out';
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
      addButton.classList.remove('article-collapsed');
      addButton.classList.add('article-expanded');
      return;
    }

    label.innerHTML = '';
    signButton.value = 'sign in';
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
    addButton.classList.remove('article-expanded');
    addButton.classList.add('article-collapsed');
  };

  domService.removeTag = (tagName, article) => {
    if (!articleService.removeTag(tagName, article)) return false;
    let newsElement = document.getElementById(article.id);
    if (!newsElement) return false;
    return applyingTagChanges(newsElement, article);
  };

  domService.addTag = (tagName, article) => {
    if (!articleService.addTag(tagName, article)) return false;
    let newsElement = document.getElementById(article.id);
    if (!newsElement) return false;
    return applyingTagChanges(newsElement, article);
  };

  function applyingTagChanges(newsElement, article) {
    let tagElement = newsElement.querySelector('div.news-tag');
    let tags = "";
    article.tags.forEach((elem) => {
      tags += "<em><a>" + elem + "</a></em> ";
    });
    tagElement.innerHTML = tags;
    return true;
  }

  window.domService = domService;

}(window.articleService);
