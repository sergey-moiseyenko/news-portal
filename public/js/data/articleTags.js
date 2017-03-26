;!function () {

  let tags = [];
  let localTags = JSON.parse(localStorage.getItem('tags'));
  if (localTags != null) tags = localTags;

  window.articleTags = tags;
}();
