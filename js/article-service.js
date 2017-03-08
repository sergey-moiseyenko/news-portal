;!function (articles = [], config) {
  'use strict';

  let newsTags = config.TAGS;
  let articleService = {};

  articleService.getArticles = function (firstIndex, lastIndex, filter) {
    firstIndex = firstIndex || 0;
    lastIndex = lastIndex || 0;
    if (lastIndex < 0 || firstIndex < 0) return false;
    if (lastIndex > articles.length || firstIndex > articles.length) return false;
    let news = [];

    if (filter != undefined) {
      let properties = Object.keys(filter);
      for (let i = firstIndex; i < firstIndex + lastIndex; i++) {
        let check = 0;
        for (let j = 0; j < properties.length; j++) {
          let propertyName = properties[j];
          if (propertyName === 'tags') {
            let tags = filter.tags;
            let index = 0;
            for (let k = 0; k < tags.length; k++) {
              if (articles[i].tags.indexOf(tags[k]) != -1) index++;
            }
            if (index === tags.length) check++;
          }
          if (articles[i][propertyName] === filter[propertyName]) check++;
        }
        if (check == properties.length) news.push(articles[i]);
      }
      return news;
    }

    for (let i = firstIndex; i < lastIndex + firstIndex; i++) {
      news.push(articles[i]);
    }
    return news;
  };

  articleService.getArticle = id => articles.find(article => article.id === id);

  function classOf(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  }

  articleService.isArticleValid = article => {
    if (article == undefined) return false;
    const props = config.VALIDATION_SCHEMA.ARTICLE.all();
    return props.every(p => article.hasOwnProperty(p.key) && classOf(article[p.key]) === p.type);
  };

  articleService.addArticle = function (article) {

    let result = articleService.isArticleValid(article);
    if (result != false) {
      article['id'] = articles.length + 1;
      articles.push(article);
    }
    return result;
  };

  articleService.editArticle = function (id, article) {
    if (article == undefined || id == undefined) return false;
    let index;
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id == id) index = i;
    }
    if (index == -1) return false;

    let properties = ['title', 'summary', 'content', 'tags'];
    let articleClone = {};
    articleClone = Object.assign(articleClone, articles[index]);

    for (let i = 0; i < properties.length; i++) {
      let propertyName = properties[i];
      if (article[propertyName] != undefined) {
        articleClone[propertyName] = article[propertyName];
      }
    }

    let result = articleService.isArticleValid(articleClone);
    if (result) {
      articleService.removeArticle(id);
      articleService.addArticle(articleClone);
      return true;
    }

    return false;
  };

  articleService.removeArticle = function(id) {
    if (id == undefined) return false;
    let index;
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) index = i;
    }
    if (index == undefined) return false;
    articles.splice(index, 1);
    return true;
  };

  articleService.addTag = (tagName, article) => {
    if (tagName == undefined || article == undefined) return false;
    let index = newsTags.indexOf(tagName);
    if (index != -1) article.tags.push(tagName);
    else return false;
  };

  articleService.removeTag = (tagName, article) => {
    if (tagName == undefined || article == undefined || article.tags == undefined) return;
    let index = article.tags.indexOf(tagName);
    if (index === -1) return;
    article.tags.splice(index, 1);
  };

  window.articleService = articleService;

}(window.articles, window.CONFIG);
