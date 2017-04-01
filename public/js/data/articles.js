;!function () {

  'use strict';


  let articles = [];

  //xml http request
  //read articles from db

  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/articles', false);
  xhr.send();

  articles = JSON.parse(xhr.responseText, (key, value) => {
    if (key === 'createdAt') return new Date(value);
    return value;
  });

  //end or request

  //local storage
  /*
  let localArticles = JSON.parse(localStorage.getItem('articles'), (key, value) => {
    if (key === 'createdAt') return new Date(value);
    return value;
  });

  if (localArticles != null) articles = localArticles;

  */

  window.articles = articles;
}();
