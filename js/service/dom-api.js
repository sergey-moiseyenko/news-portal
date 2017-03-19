;!function (articleService, tagService) {
  'use strict';

  const articleView = window.articleView;
  let domService = {};
  let currentArticles = articleService.getData();

  domService.showNews = (article) => {
    let detailArticle = window.detailArticleView(article);
    let content = document.getElementById('content-id');
    content.innerHTML = detailArticle;
  };

  domService.addNews = article => {
    article = articleService.addArticle(article);
    if (!article) return;
    domService.setDataAfterLoad();
  };

  domService.deleteNews = id => {
    let article = articleService.removeArticle(id);
    if (!article) return;
    article = document.getElementById(id);
    if (!article) return;

    let newsListDiv = document.getElementById('news-list-id');
    newsListDiv.removeChild(article);
  };

  domService.editNews = (id, articleForEdit = undefined) => {
    if (!articleService.editArticle(id, articleForEdit)) return false;
    domService.setDataAfterLoad();
    return true;
  };

  //refactoring this method

  domService.usersConfig = (newsList, value) => {
    let deleteButtons = newsList.querySelectorAll('div.delete-news-button');
    let editButtons= newsList.querySelectorAll('div.edit-news-button');
    let addNewsButton = document.querySelector('div.add-news-button');

    if (value == 'sing in') {
      deleteButtons.forEach(deleteButton => {
        deleteButton.classList.add('article-collapsed');
      });
      editButtons.forEach(editButton => {
        editButton.classList.add('article-collapsed');
      });
      if (!addNewsButton) return;
      addNewsButton.classList.remove('article-expanded');
      addNewsButton.classList.add('article-collapsed');
      return;
    }

    deleteButtons.forEach(deleteButton => {
      deleteButton.classList.remove('article-collapsed');
    });
    editButtons.forEach(editButton => {
      editButton.classList.remove('article-collapsed');
    });

    if (!addNewsButton) return;
    addNewsButton.classList.remove('article-collapsed');
    addNewsButton.classList.add('article-expanded');
  };

  domService.removeTag = (tagName, article) => {
    if (!articleService.removeTag(tagName, article)) return false;
    let newsElement = document.getElementById(article.id);
    if (!newsElement) return false;
    return applyingTagChanges(newsElement, article);
  };

  domService.addTag = (tagName, article) => {
    if (!articleService.addTag(tagName, article)) return false;
    let newsElement = document.getElementById(article.id);
    if (!newsElement) return false;
    return applyingTagChanges(newsElement, article);
  };

  function applyingTagChanges(newsElement, article) {
    let tagElement = newsElement.querySelector('div.news-tag');
    let tags = "";
    article.tags.forEach((elem) => {
      tags += "<em><a>" + elem + "</a></em> ";
    });
    tagElement.innerHTML = tags;
    return true;
  }

  domService.setDataAfterLoad = () => {
    domService.setUser(userService.getUser());
    let content = document.querySelector('div.content');
    domService.setContent(content);
    domService.usersConfig(content.querySelector('div.news-list'), document.querySelector('input.sign-in-button').value);
  };

  domService.setUser = (user) => {
    if (!user) return;
    let singInCell = document.querySelector('div.sign-in-out-cell');
    let label = singInCell.querySelector('label.user-name');
    label.innerHTML = user.name;
    let singInButton = singInCell.querySelector('input.sign-in-button');
    singInButton.value = 'sing-out';
  };

  domService.setContent = (content) => {
    content.innerHTML = newsListView();
    let newsList = content.querySelector('div.news-list');
    let userCommands = document.createElement('div');
    userCommands.className = 'user-commands';
    userCommands.innerHTML = userCommandsView();
    content.appendChild(userCommands);

    currentArticles.forEach(article => {
      let news = document.createElement('div');
      news.className = 'news';
      news.id = article.id;
      news.innerHTML = articleView(article);
      newsList.insertBefore(news, newsList.firstChild);
    });
  };

  domService.upDateAfterAuthorization = (user) => {
    if (!user) return;
    let singInCell = document.getElementById('sing-in-out-cell-id');
    singInCell.innerHTML = signInOutView(user);
    let newsList = document.querySelector('div.news-list');
    if (newsList) domService.usersConfig(newsList, 'sing-out');
  };

  domService.upDateAfterFiltering = (articles) => {
    if (!articles) return;
    currentArticles = articles;
    domService.setDataAfterLoad();
  };

  domService.showFilterMenu = () => {
    let filterMenuButton = document.querySelector('div.drop-down-menu');
    let filterForm = document.createElement('div');
    filterForm.innerHTML = window.filterView();
    let select = filterForm.querySelector('select');
    let tags = tagService.getArticleTags();
    tags.forEach(tag => {
      let option = document.createElement('option');
      option.innerHTML = tag;
      select.appendChild(option);
    });
    filterMenuButton.insertBefore(filterForm, filterMenuButton.firstChild);
  };

  domService.hideFilterMenu = () => {
    let filterMenuButton = document.querySelector('div.drop-down-menu');
    let filterForm = filterMenuButton.querySelector('div');
    filterMenuButton.removeChild(filterForm);
  };

  domService.loadArticles = () => {
    articleService.loadArticles();
  };

  window.domService = domService;
}(window.articleService, window.tagService);
