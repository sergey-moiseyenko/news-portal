;!function () {

  'use strict';

  let articles = [];

  let localArticles = JSON.parse(localStorage.getItem('articles'), (key, value) => {
    if (key === 'createdAt') return new Date(value);
    return value;
  });

  if (localArticles != null) articles = localArticles;

  window.articles = articles;
}();
