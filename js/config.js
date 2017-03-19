;!function () {

  const CONFIG = {
    ARTICLE_COUNT_ON_PAGE: 10,
    TAGS: ['sport', 'media', 'politics'],
    TOP_DEFAULTS: 10,
    SKIP_DEFAULTS: 0,
    VALIDATION_SCHEMA: {
      ARTICLE: {
        ID: {
          key: 'id',
          type: 'String'
        },
        TITLE: {
          key: 'title',
          type: 'String'
        },
        SUMMARY: {
          key: 'summary',
          type: 'String'
        },
        CREATED_AT: {
          key: 'createdAt',
          type: 'Date'
        },
        AUTHOR: {
          key: 'author',
          type: 'String'
        },
        CONTENT: {
          key: 'content',
          type: 'String'
        },
        TAGS: {
          key: 'tags',
          type: 'Array'
        },

        all () {
          return [this.ID, this.TITLE, this.SUMMARY, this.CREATED_AT, this.AUTHOR, this.CONTENT, this.TAGS];
        }
      }
    }
  };

  window.CONFIG = CONFIG;
}();
