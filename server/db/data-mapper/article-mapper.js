class ArticleMapper {

    constructor() {
      this.db = require('diskdb');
      this.connect = this.db.connect(__dirname + '/../data', ['articles']);
    }

    setArticlesToDb(articles) {
      this.db.articles.remove();
      this.db.loadCollections(['articles']);
      if (articles.length == 0) return;
      this.db.articles.save(articles);
    }

    getArticle(id) {
      return this.db.articles.findOne({id: id});
    }

    loadArticles() {
      this.db.loadCollections(['articles']);
      return this.db.articles.find();
    }
  }

module.exports = new ArticleMapper();
