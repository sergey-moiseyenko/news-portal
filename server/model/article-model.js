;!function () {

  let articleModel = {};
  let fs = require('fs');

  articleModel.addArticleToDb = article => {
    let articles = JSON.parse(fs.readFileSync('articles.json'));
    articles.push(article);
    fs.writeFile('articles.json', JSON.stringify(articles));
  };

  module.exports.articleModel = articleModel;
}();
