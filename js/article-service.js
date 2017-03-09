;!function (articles, config) {

  'use strict';

  articles = articles || [];

  let newsTags = config.TAGS;
  let articleService = {};

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

  articleService.addArticle = article => {

    let result = articleService.isArticleValid(article);
    if (result != false) {
      articles.push(article);
    }
    return result;
  };

  articleService.editArticle = (id, article) => {
    if (article == undefined || id == undefined) return false;
    let currentArticle = articleService.getArticle(id);
    if (!currentArticle) return false;

    let properties = ['title', 'summary', 'content', 'tags'];
    let articleClone = {};
    articleClone = Object.assign(articleClone, currentArticle);

    properties.forEach((propertyName) => {
      if (article[propertyName]) {
        articleClone[propertyName] = article[propertyName];
      }
    });

    if (articleService.isArticleValid(articleClone)) {
      articleService.removeArticle(id);
      articleService.addArticle(articleClone);
      return true;
    }
    return false;
  };

  articleService.removeArticle = (id) => {
    if (id == undefined) return false;
    let article = articleService.getArticle(id);
    if (!article) return false;
    let index = articles.indexOf(article);
    articles.splice(index, 1);
    return true;
  };

  articleService.addTag = (tagName, article) => {
    if (tagName == undefined || article == undefined) return false;
    if (!newsTags.indexOf(tagName)) return false;
    if (!article.tags.indexOf(tagName)) return false;
    article.tags.push(tagName);
    return true;
  };

  articleService.removeTag = (tagName, article) => {
    if (tagName == undefined || article == undefined || article.tags == undefined) return false;
    let index = article.tags.indexOf(tagName);
    if (index === -1) return false;
    article.tags.splice(index, 1);
    return true;
  };

  articleService.getArticles = (firstIndex, lastIndex, filter) => {
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

  window.articleService = articleService;

}(window.articles, window.CONFIG);
