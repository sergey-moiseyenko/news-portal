;!function () {

  'use strict';

  let articles = [

   {
      id : '1',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '2',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2017-02-27T23:00:00'),
      author:'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'politics', 'media'],
    },

    {
      id : '3',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2015-02-27T23:00:00'),
      author:'Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport'],
    },

    {
      id : '4',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '5',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Sergey Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '6',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '7',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Moiseyenko',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '8',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Sergey',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '9',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'Someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '10',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '11',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '12',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '13',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '14',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '15',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '16',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '17',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'someone',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '18',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '19',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

    {
      id : '20',
      title:'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
      summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      createdAt: new Date('2016-02-27T23:00:00'),
      author:'test',
      content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
      tags : ['sport', 'media'],
    },

  ];

  let newsTag = ['media', 'sport', 'politics'];

  articles.getArticles = function (firstIndex, lastIndex, filter, tags) {

    let news = [];
    let index = 0;
    let last = lastIndex + firstIndex;
    let error = 'incorrect input info';

    if (firstIndex < 0 || lastIndex < 0) return error;
    if (firstIndex >= articles.length || lastIndex > articles.length) return error;
    if ((lastIndex + firstIndex) > articles.length) last = articles.length;

    if (filter == undefined && tags == undefined) {
      for (let i = firstIndex; i < last; i++) {
        news[index] = this[i];
        index++;
      }

      return news;

    }else if (tags == undefined){
      return articles.filterByConfig(firstIndex, last, filter);

    }else if (filter == undefined) {
      return articles.filterByTags(firstIndex, last, tags);

    }else {
      let news = articles.filterByConfig(firstIndex, last, filter);
      return articles.filterByTags(firstIndex, last, tags, news);
    };
  };

  articles.filterByConfig = function (firstIndex, last, filter) {

    let index = 0;
    let news = [];

    let properties = Object.keys(filter);

    for (let i = firstIndex; i < last; i++) {

      let check = true;

      for (let j = 0; j < properties.length; j++) {
        let name = properties[j];

        if (this[i][name].toString() != filter[name].toString()) {
          check = false;
        }
      }

      if (check == true) news[index] = this[i];

      index++;
    }

    news = news.sort(function (object1, object2) {
      return object1.createdAt - object2.createdAt;
    });

    return news;
  };

  articles.filterByTags = function (firstIndex, last, tags, news) {

    let content = [];
    let index = 0;

    if (tags.length == 0) {

      for (let i = firstIndex; i < last - firstIndex; i++) {
        content[i] = articles[i];
      }

      return news;
    }else {

      for (let i = 0; i < tags.length; i++) {
        let index = -1;
        for (let j = 0; j < newsTag.length; j++) {
          if (tags[i] == newsTag[j]) index = i;
        }
        if (index == -1) {
          return undefined;
        }
      }

      if (news == undefined) {

        for (let k = firstIndex; k < last; k++) {
          index = 0;
          for (let i = 0; i < tags.length; i++) {
            for (let j = 0; j < articles[k].tags.length; j++) {
              if (tags[i] == articles[k].tags[j]) index++;
            }
          }

          if (index == tags.length) content.push(articles[k]);
        }

        return content;
      }else {

        for (let k = 0; k < news.length; k++) {
          index = 0;
          for (let i = 0; i < tags.length; i++) {
            for (let j = 0; j < news[k].tags.length; j++) {
              if (tags[i] == news[k].tags[j]) index++;
            }
          }

          if (index == tags.length) content.push(news[k]);
        }

        return content;
      }
    }
  };
  
  articles.getArticle = function(id) {

    let article;

    for (let i = 0; i < articles.length; i++) {
      if (this[i].id.toString() == id.toString()) {
        article = this[i];
      }
    }

    return article;
  };

  function classOf(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
  }
  
  articles.validateArticle = function (article) {

    let check = true;

    if (article == undefined) check = false;
    else {

      let articleProperties = Object.keys(article);
      let properties = ['id', 'title', 'summary', 'createdAt', 'author', 'content', 'tags'];
      let propertyTypes = ['String', 'String', 'String', 'Date', 'String', 'String', 'Array'];

      if (articleProperties.length != properties.length) check = false;
      else {

        for (let i = 0; i < properties.length; i++) {
          if (articleProperties[i] != properties[i]) check = false;
        }

        if (check == true) {
          for (let i = 0; i < properties.length; i++) {
            if (classOf(article[properties[i]]) != propertyTypes[i]) check = false;

          }
        }

        if (check == true) {
          if (article.tags == undefined || article.tags.length == 0) check = false;
          else {
            for (let i = 0; i < article.tags.length; i++) {
              let index = - 1;
              for (let j = 0; j < newsTag.length; j++) {
                if (article.tags[i] == newsTag[j]) index = i;
              }
              if (index == -1) {
                return false;
              }
            }
          }
        }
      }
    }

    return check;
  };

  articles.addArticle = function (article) {

    let result = articles.validateArticle(article);

    if (result != false) {
      article['id'] = articles.length + 1;
      articles.push(article);
    }

    return result;
  };

  articles.editArticle = function (id, article) {
    if (article == undefined || id == undefined) return false;
    else {
      let result = false;
      let editIndex = - 1;

      for(let i = 0; i < articles.length; i++) {
        if (Number(articles[i]['id']) == Number(id)) editIndex = i;
      }

      let properties = Object.keys(article);
      let check = true;

      for (let i = 0; i < properties.length; i++) {
          if (classOf(article[properties[i]]) != 'String') check = false;
      }

      if (editIndex != -1 && check == true) {
        for (let i = 0; i < properties.length; i++) {
          articles[editIndex][properties[i]] = article[properties[i]];
          result = true;
        }
      }

      return result;
    }
  };

  articles.removeArticle = function (id) {

    if (id == undefined) return false;
    else {

      let result = false;
      let deleteIndex = -1;

      for(let i = 0; i < articles.length; i++) {
        if (articles[i]['id'] === id) deleteIndex = i;
      }

      if (deleteIndex != -1) {
        articles.splice(deleteIndex, 1);
        result = true;
      }

      return result;
    }
  };

  articles.addTag = function (tagName, article) {
    if (tagName == undefined || article == undefined) return false;
    let index = -1;
    for(let i = 0; i < newsTag.length; i++) {
      if (tagName == newsTag[i]) index = i;
    }

    if (index == -1) return false;
    else {

      let check = true;

      for(let i = 0; i < article.tags.length; i++) {
        if (tagName == article.tags[i]) check = false;
      }

      if (check != false) article.tags.push(tagName);

      return check;
    }
  };

  articles.removeTag = function (tagName, article) {
    if (tagName == undefined || article == undefined) return false;
    let index = -1;
    for(let i = 0; i < newsTag.length; i++) {
      if (tagName == newsTag[i]) index = i;
    }

    if (index == -1) return false;
    else {

      let check = true;
      index = -1;

      for(let i = 0; i < article.tags.length; i++) {
        if (tagName == article.tags[i]) index = i;
      }

      if (index == -1) check = false;
      else {
        check = true;
        article.tags.splice(index, 1);
      }

      return check;
    }
  };

  let article = {
    id : '1',
    title:'Test',
    summary: 'Test',
    createdAt: new Date(),
    author:'Test',
    content: "Test",
    tags: ['sport'],
  };

  console.log('******************\n');
  console.log('filtering by number');
  let result = articles.getArticles(0, 3);
  console.log('valid input information');
  console.log(result);
  console.log('not validate input information');
  result = articles.getArticles(-1, 3);
  console.log(result);

  console.log('******************\n');
  console.log('filtering by author');
  result = articles.getArticles(0, 3, {'author' : 'Sergey Moiseyenko'});
  console.log(result);

  console.log('******************\n');

  console.log('******************\n');
  console.log('filtering by id of news');
  console.log('valid input information');
  result = articles.getArticle('3');
  console.log(result);

  console.log('******************\n');

  console.log('test validate article');
  result = articles.validateArticle(article);
  console.log(result);

  console.log('******************\n');
  console.log('add article');
  result = articles.addArticle(article);
  console.log(result);
  console.log(articles);

  console.log('******************\n');
  console.log('edit article');
  result = articles.editArticle('1', {'title' : 'Edit', 'content' : 'edit'});
  console.log(result);
  console.log(articles);
  console.log('******************\n');

  console.log('\n');
  result = articles.removeArticle('1');
  console.log(result);
  console.log(articles);
  console.log('******************\n');

  console.log('add tag to article');
  console.log(articles[0]);
  console.log(articles.addTag('politics', articles[0]));
  console.log(articles[0]);
  console.log('******************\n');

  console.log('remove tag in article');
  console.log(articles[0]);
  console.log(articles.removeTag('sport', articles[0]));
  console.log(articles[0]);
  console.log('******************\n');

  console.log('add tag to article with not valid values');
  console.log(articles[0]);
  console.log(articles.addTag('not valid'));
  console.log(articles[0]);
  console.log('******************\n');

  console.log('remove tag to article with not valid values');
  console.log(articles[0]);
  console.log(articles.addTag('not valid'));
  console.log(articles[0]);
  console.log('******************\n');

  console.log('filtering by tags');
  console.log('if you want to see ten article with tag : "tag name" and news-list consist only five news with this "tag name", filtering return only five article, else filtering return empty array');
  console.log(articles.getArticles(0, 3, undefined, ['politics', 'media']));
  console.log('******************\n');

  console.log(articles.getArticles(0, 3, {'author' : 'Sergey Moiseyenko'}));

}();
