;!function (tags) {

  let tagService = {};

  tagService.updateLocalTags = (tag) => {
    tags.push(tag);
    localStorage.setItem('tags', JSON.stringify(tags));
  };

  tagService.getArticleTags = () => { return tags };

  window.tagService = tagService;
}(window.articleTags);
