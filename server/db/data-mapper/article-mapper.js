;!function () {

  class ArticleMapper {

    constructor() {
      this.db = require('diskdb');
      this.connect = this.db.connect(__dirname + '/../data', ['articles']);
    }

    loadArticles() {
      return this.db.articles.find();
    }

    setArticlesToDb(articles) {
      this.db.articles.remove();
      this.db.loadCollections(['articles']);
      this.db.articles.save(articles);
    }
  }

  module.exports.articleMapper = new ArticleMapper();
}();
