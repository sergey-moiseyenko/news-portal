;!function () {

  'use strict';

  let articles = [];
  let savedArticles = [];

  let localArticles = JSON.parse(localStorage.getItem('articles'), (key, value) => {
    if (key === 'createdAt') return new Date(value);
    return value;
  });

  let localSavedArticles = JSON.parse(localStorage.getItem('savedArticles'), (key, value) => {
    if (key === 'createdAt') return new Date(value);
    return value;
  });

  if (localArticles != null) articles = localArticles;
  if (localSavedArticles != null) savedArticles = localSavedArticles;

  window.articles = articles;
  window.savedArticles = savedArticles;
}();
