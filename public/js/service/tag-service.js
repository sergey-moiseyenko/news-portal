;!function () {

  let tagService = {};

  tagService.updateLocalTags = (tag) => {

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/tag', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({tag: tag}));
  };

  tagService.getArticleTags = () => {

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://localhost:3000/tags', true);
      xhr.send();

      xhr.onload = () => {
        let tags = [];

        let loadTags = JSON.parse(xhr.responseText);
        loadTags.forEach(tag => {
          if (tag) tags.push(tag);
        });

        resolve(tags);
      }
    });
  };

  window.tagService = tagService;
}();
