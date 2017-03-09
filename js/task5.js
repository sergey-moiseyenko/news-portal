//Please, open console in your browser and on window.test object call methods

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

  test.add = () => domService.addNews(article);
  test.delete = () => domService.deleteNews('0');
  test.edit = () => domService.editNews('0');
  test.showArticle = () => domService.showNews(articleService.getArticle('0'));
  test.usersConfig = () => domService.usersConfig('sign out');
  test.removeTag = () => domService.removeTag('media', articleService.getArticle('0'));
  test.addTag = () => domService.addTag('media', articleService.getArticle('0'));

  window.test = test;
}(window.domService, window.articleService);
