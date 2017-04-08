;!function (tags) {

  let tagService = {};

  tagService.updateLocalTags = (tag) => {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/tag', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({tag : tag}));
  };

  tagService.getArticleTags = () => {

    let tags = [];

    let xhr = new XMLHttpRequest();
    xhr.open('GET', '/tags', false);
    xhr.send();

    let loadTags = JSON.parse(xhr.responseText);
    loadTags.forEach(tag => {
      if(tag.tag) tags.push(tag.tag);
    });

    return tags
  };

  window.tagService = tagService;
}(window.articleTags);
