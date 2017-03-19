;!function (articleService, tagService) {

  let filterFrameController = {};

  filterFrameController.searchItemListener = (event) => {

    let filterFrame = document.querySelector('div.filtration-frame');
    let author = filterFrame.querySelector('[id = input-author]');
    let date = filterFrame.querySelector('[id = input-date]');
    let tagInput = filterFrame.querySelector('[id = input-tags]');

    let filter = {};
    if (author.value) filter.author = author.value;
    if (date.value) filter.createdAt = new Date(date.value);
    if (tagInput.value) {
      filter.tags = tagInput.value.split(' ');
    }

    let filteredArticles = articleService.getArticles(undefined, undefined, filter);
    domService.upDateAfterFiltering(filteredArticles);
    domService.hideFilterMenu();
  };

  filterFrameController.addTagListener = (event) => {

    let filter = document.querySelector('div.filtration-frame');
    let tagsSelect = filter.querySelector('select');
    let tags = Array.prototype.slice.call(tagsSelect.options);
    let inputTag = filter.querySelector('[id = input-tags]');

    if(!tags.find(tag => tag.value === inputTag.value) && inputTag.value) {
      let option  = document.createElement('option');
      option.innerHTML = inputTag.value;
      tagsSelect.appendChild(option);
      tagService.updateLocalTags(inputTag.value);
    }
  };

  window.filterFrameController = filterFrameController;
}(window.articleService, window.tagService);
