;!function (articles, config, util) {

  'use strict';

  articles = articles || [];

  let newsTags = config.TAGS;
  let articleService = {};

  articleService.getArticle = id => {

    let onload = (resolve, xhr) => {
      let response = JSON.parse(xhr.responseText);
      if (Object.keys(response).length == 0) resolve({});
      resolve(JSON.parse(xhr.responseText));
    };

    let promise = getReqPromise('http://localhost:3000/article/'+id+'', 'GET', onload);
    return promise;
  };

  function classOf(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  }

  articleService.isArticleValid = article => {
    if (!article) return false;
    const props = config.VALIDATION_SCHEMA.ARTICLE.all();
    return props.every(p => article.hasOwnProperty(p.key) && classOf(article[p.key]) === p.type);
  };

  articleService.addArticle = article => {

    if (!articleService.isArticleValid(article)) return;

    let onload = resolve => {
      resolve();
    };

    let promise = sendReqPromise('http://localhost:3000/article', 'POST', article, onload);
    return promise;
  };

  articleService.editArticle = (article) => {

    let onload = resolve => {
      resolve();
    };

    let promise = sendReqPromise('http://localhost:3000/article', 'PATCH', article, onload);
    return promise;
  };

  articleService.removeArticle = (id) => {

    //<-- create promise -->
    let onload = resolve => {
      resolve();
    };

    let promise = sendReqPromise('http://localhost:3000/article', 'DELETE', {id: id}, onload);
    return promise;
  };

  articleService.addTag = (tagName, article) => {
    if (!tagName || !article) return false;
    if (newsTags.indexOf(tagName) === -1) return false;
    if (article.tags.indexOf(tagName) != -1) return false;
    article.tags.push(tagName);
    return true;
  };

  articleService.removeTag = (tagName, article) => {
    if (!tagName || !article || !article.tags) return false;
    let index = article.tags.indexOf(tagName);
    if (index === -1) return false;
    article.tags.splice(index, 1);
    return true;
  };

  articleService.getArticles = (skip, top, filter = {}) => {

    return new Promise((resolve, reject) => {

      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:3000/articles?parameters=' + encodeURIComponent(JSON.stringify(filter)), true);
      xhr.send();

      xhr.onload = () => {
        let articles = JSON.parse(xhr.responseText, (key, value) => {
          if (key === 'createdAt') return new Date(value);
          return value;
        });

        resolve(articles);
      }
    });
  };

  //create promises method's

  function sendReqPromise(url, method, value, onload) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(value));

      xhr.onload = () => {
        onload(resolve);
      }
    });
  }

  function getReqPromise(url, method, onload) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.send();

      xhr.onload = () => {
        onload(resolve, xhr);
      }
    });
  }

  window.articleService = articleService;
}(window.articles, window.CONFIG, window.util);
