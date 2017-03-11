//Use this file to work with dom from console
//Please, open console in your browser and on window.test object call methods
//You can change params in domService and test objects functions;
//Also u don't need call userConfig method from console, u can just click on sign-in/sign-out element
//You can delete and edit news only in news-list mode, in show-detail mode you can't do this, cause this mode doesn't contain delete and edit buttons in my proto
//To remove and add tags just call this method on window.test object; You can change params these methods in this file
//!!! Only sign-in/sign-out elements have own listeners

;!function (domService, articleService) {

  let test = {};

  let article = {
    id: '0',
    title: 'TAYLOR SWIFT GETS SULTRY IN THE "STYLE" VIDEO',
    summary: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
    createdAt: new Date('2016-02-27T23:00:00'),
    author: 'Sergey Moiseyenko',
    content: "Taylor Swift's been teasing the 'Style' video on her Instagram for the past week, giving us dreamy snippets of what was to come. The full video, which dropped this morning, realizes the pop star's potential to get dark.",
    tags: ['sport', 'media'],
  };

  test.add = (article) => domService.addNews(article);
  test.delete = (id) => domService.deleteNews(id);
  test.edit = (id) => domService.editNews(id);
  test.showArticle = (id) => domService.showNews(articleService.getArticle(id));
  test.usersConfig = (value) => domService.usersConfig(value);
  test.removeTag = (id, tagName) => domService.removeTag(tagName, articleService.getArticle(id));
  test.addTag = (id, tagName) => domService.addTag(tagName, articleService.getArticle(id));

  window.test = test;
}(window.domService, window.articleService);
