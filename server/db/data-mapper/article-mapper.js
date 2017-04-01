;!function () {

  class ArticleMapper {

    constructor() {
      this.db = require('diskdb');
      this.connect = this.db.connect('..', ['articles']);
    }

    loadArticles() {
      return this.db.articles.find();
    }

    setArticlesToDb(article) {
      this.db.articles.remove();
      this.db.loadCollections(['articles']);
      this.db.articles.save(article);
    }
  }

  module.exports.ArticleMapper = ArticleMapper;
}();
