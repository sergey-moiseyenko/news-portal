;!function (articles, config, util) {

  'use strict';

  articles = articles || [];

  let newsTags = config.TAGS;
  let articleService = {};

  //articleService.getArticle = id => articles.find(article => article.id === id);

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

    /*

    let articles = articleService.getArticlesFromDb();
    if (!article || !article.id) return false;
    let currentArticle = articleService.getArticle(article.id);
    if (!currentArticle) return false;

    let properties = ['title', 'summary', 'content', 'tags'];
    let articleClone = Object.assign({}, currentArticle);

    properties.forEach((propertyName) => {
      if (article[propertyName]) {
        articleClone[propertyName] = article[propertyName];
      }
    });

    if (!articleService.isArticleValid(articleClone)) return false;

    articles[articles.indexOf(currentArticle)] = articleClone;
    articleService.setDataToDb();
    return true;

    */
  };

  articleService.removeArticle = (id) => {

    //<-- create promise -->

    let onload = resolve => {
      resolve();
    };


    let promise = sendReqPromise('http://localhost:3000/article', 'DELETE', {id: id}, onload);
    return promise;

    //<-- end of promise -->
    /*
    let articles = articleService.getArticlesFromDb();
    if (!id) return;
    let article = articleService.getArticle(id);
    if (!article) return;
    let index = articles.indexOf(article);
    articles.splice(index, 1);
    articleService.setDataToDb();
    return article;
    */
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
    let articles = articleService.getArticlesFromDb();
    let filterTags = filter.tags || [];
    delete filter.tags;
    let filterKeys = Object.keys(filter);
    let filteredArticles = articles.filter(article => {
      if (!filterTags.every(tag => article.tags.includes(tag))) return false;
      return filterKeys.every(filterKey => filter[filterKey].toString() === article[filterKey].toString());
    });

    skip = util.skipNumberValid(skip, filteredArticles.length);
    top = util.topNumberValid(top);
    filteredArticles = filteredArticles.slice(skip, skip + top);
    filteredArticles.sort((article1, article2) => article2.createdAt - article1.createdAt);

    return filteredArticles;
  };

  //create promises method's

  articleService.getArticlesFromDb = () => {

    let onload = (resolve, xhr) => {
      let articles = JSON.parse(xhr.responseText, (key, value) => {
        if (key === 'createdAt') return new Date(value);
        return value;
      });

      resolve(articles);
    };

    let promise = getReqPromise('http://localhost:3000/articles', 'GET', onload);
    return promise;
  };

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
