;!function () {
//articles
  'use strict';

  let newsTag = ['media', 'sport', 'politics'];

  let articleService = {};

  let articles = [
    {
      id: '1',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Test1",
      createdAt: new Date('2016-02-27T23:00:00'),
      author: 'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'media'],
    },

    {
      id: '2',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Test2",
      createdAt: new Date('2017-02-27T23:00:00'),
      author: 'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport', 'politics', 'media'],
    },

    {
      id: '3',
      title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Test3",
      createdAt: new Date('2015-02-27T23:00:00'),
      author: 'Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags: ['sport'],
    }
  ];

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

  articleService.getArticle = function (id) {

    let article;
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) {
        article = articles[i];
      }
    }
    return article;
  };

  function classOf(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
  }

  articleService.validateArticle = function (article) {
    if (article == undefined) return false;
    let properties = ['id' ,'title', 'summary', 'createdAt', 'author', 'content', 'tags'];
    let propertiesType = ['String', 'String', 'String', 'Date', 'String', 'String', 'Array'];
    let articlesProperties = Object.keys(article);

    for (let i = 0; i < properties.length; i++) {
      if (articlesProperties[i] != properties[i]) return false;
    }

    for (let i = 0; i < propertiesType.length; i++) {
      let propertyName = properties[i];
      if (classOf(article[propertyName]) !== propertiesType[i]) return false;
    }

    return true;
  };

  articleService.addArticle = function (article) {

    let result = articleService.validateArticle(article);
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

    let result = articleService.validateArticle(articleClone);
    if (result) {
      articleService.removeArticle(id);
      articleService.addArticle(articleClone);
      return true;
    }

    return false;
  };

  articleService.removeArticle = function (id) {
    if (id == undefined) return false;
    let index;
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].id === id) index = i;
    }
    if (index == undefined) return false;
    articles.splice(index, 1);
    return true;
  };

  articleService.addTag = function (tagName, article) {
    if (tagName == undefined || article == undefined) return false;
    let index = newsTag.indexOf(tagName);
    if (index != -1) article.tags.push(tagName);
    else return false;
  };

  articleService.removeTag = function (tagName, article) {
    if (tagName == undefined || article == undefined) return false;
    let index = article.tags.indexOf(tagName);
    if (index == -1) return false;
    else article.tags.splice(index, 1);
  };

  //window.articleService = articleService;
  //window.articles
}();
