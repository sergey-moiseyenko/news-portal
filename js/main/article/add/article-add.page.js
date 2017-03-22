;!function (ArticleAddViewComponent, domService) {
  'use strict';

  class ArticleAddPageComponent {

    constructor() {

    }

    render() {
      console.log(ArticleAddViewComponent);
      let addArticleComponent = new ArticleAddViewComponent(this.onAddClicked, this.onBackClicked);
      let addArticleElement = addArticleComponent.render();
      let content = document.querySelector('div.content');
      content.innerHTML = '';
      content.appendChild(addArticleElement);
    }

    onAddClicked(article) {
      domService.addNews(article);
    }

    onBackClicked() {
      domService.setDataAfterLoad();
    }
  }

  window.ArticleAddPageComponent = ArticleAddPageComponent;
}(window.ArticleAddViewComponent, window.domService);
