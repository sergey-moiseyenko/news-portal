;!function (PromiseWrapper) {

  let tagService = {};

  tagService.updateLocalTags = (tag) => {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/tag/tag', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({tag: tag}));
  };

  tagService.getArticleTags = () => {

    let onload = (resolve, xhr) => {
      let tags = [];

      let loadTags = JSON.parse(xhr.responseText);
      loadTags.forEach(tag => {
        if (tag) tags.push(tag);
      });

      resolve(tags);
    };

    return new PromiseWrapper('http://localhost:3000/tag/tags', onload).get();
  };

  window.tagService = tagService;
}(window.PromiseWrapper);
