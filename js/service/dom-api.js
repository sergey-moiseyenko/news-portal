;!function (articleService, articleTagsService) {
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
    domService.upToDate();
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
    domService.upToDate();
    return true;
  };

  function getDomElement(articleView, article) {
    let element = document.createElement('div');
    element.className = 'news';
    element.id = article.id;
    element.innerHTML = articleView;
    return element;
  }

  //refactoring this method

  domService.usersConfig = (newslist, value) => {
    let deleteButtons = newslist.querySelectorAll('div.delete-news-button');
    let editButtons= newslist.querySelectorAll('div.edit-news-button');
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

  domService.upToDate = () => {
    let user = userService.getUser();
    if (user) {
      let singInCell = document.querySelector('div.sign-in-out-cell');
      let label = singInCell.querySelector('label.user-name');
      label.innerHTML = user.name;
      let singInButton = singInCell.querySelector('input.sign-in-button');
      singInButton.value = 'sing-out';
    }

    let content = document.querySelector('div.content');
    content.innerHTML = views.contentView();
    let newsList = content.querySelector('div.news-list');
    if (!newsList) {
      content.innerHTML = views.newsListView();
      newsList = content.querySelector('div.news-list');
    }

    currentArticles.forEach(article => {
      let view = articleView(article);
      let news = document.createElement('div');
      news.className = 'news';
      news.id = article.id;
      news.innerHTML = view;
      newsList.insertBefore(news, newsList.firstChild);
    });

    domService.usersConfig(newsList, document.querySelector('input.sign-in-button').value);
  };

  domService.upToDateAuthorization = (user) => {
    let singInCell = document.getElementById('sing-in-out-cell-id');
    let userName = document.createElement('label');
    userName.className = 'user-name';
    userName.innerHTML = user.name;
    singInCell.removeChild(singInCell.getElementsByClassName('sing-in-frame')[0]);
    let singInButton = document.createElement('input');
    singInButton.className = 'sign-in-button';
    singInButton.type = 'button';
    singInButton.value = 'sing out';
    singInButton.onclick = window.pageListener.logInOutFrame;
    singInCell.appendChild(userName);
    singInCell.appendChild(singInButton);
    domService.usersConfig(document.querySelector('div.news-list'), singInButton.value);
  };

  domService.upToDateAfterFiltering = (articles) => {
    if (!articles) return;
    currentArticles = articles;
    domService.upToDate();
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

  window.domService = domService;
}(window.articleService, window.tagService);
