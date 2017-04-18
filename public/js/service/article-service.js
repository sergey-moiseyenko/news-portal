;!function (articles, config, util, PromiseWrapper) {

  'use strict';

  articles = articles || [];

  let newsTags = config.TAGS;
  let articleService = {};


  //<-- method use promise wrapper -->
  articleService.getArticle = id => {

    let onload = (resolve, xhr) => {
      let response = JSON.parse(xhr.responseText);
      if (Object.keys(response).length == 0) resolve();
      else resolve(JSON.parse(xhr.responseText));
    };

    return new PromiseWrapper('http://localhost:3000/article/article/'+id+'', onload).get();
  };

  //<-- method use promise wrapper -->
  articleService.addArticle = article => {

    let onload = resolve => {
      resolve();
    };

    return new PromiseWrapper('http://localhost:3000/article/article', onload).post(article);
  };

  //<-- method use promise wrapper -->
  articleService.editArticle = (article) => {

    let onload = resolve => {
      resolve();
    };

    return new PromiseWrapper('http://localhost:3000/article/article', onload).patch(article);
  };

  //<-- method use promise wrapper -->
  articleService.removeArticle = (id) => {

    let onload = resolve => {
      resolve();
    };

    return new PromiseWrapper('http://localhost:3000/article/article', onload).delete({id: id});
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

    let onload = (resolve, xhr) => {
      let articles = JSON.parse(xhr.responseText, (key, value) => {
        if (key === 'createdAt') return new Date(value);
        return value;
      });

      resolve(articles);
    };

    let url = 'http://localhost:3000/article/articles?parameters=' + encodeURIComponent(JSON.stringify(filter));
    return new PromiseWrapper(url, onload).get();
  };

  window.articleService = articleService;
}(window.articles, window.CONFIG, window.util, window.PromiseWrapper);
