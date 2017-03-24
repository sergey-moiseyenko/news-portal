;!function() {

  class FilterComponent {

    render() {
      let tags = tagService.getArticleTags();
      let filterViewElement = new FilterViewComponent(this.signInClicked.bind(this), this.addClicked.bind(this), tags).render();
      let dropMenuElem = document.querySelector('div.drop-down-menu');
      dropMenuElem.insertBefore(filterViewElement, dropMenuElem.firstElementChild);
    }

    signInClicked(filter) {
      new ArticleListPageComponent(articleService.getArticles(CONFIG.SKIP_DEFAULTS, CONFIG.TOP_DEFAULTS, filter)).render();
      new UserCommandsComponent().render();
    }

    addClicked(tags = []) {
      if (!tags) return;

      let addedTags = [];
      tags.forEach(tag => {
        if (tagService.getArticleTags().indexOf(tag) != -1) return tag;
        tagService.updateLocalTags(tag);
        addedTags.push(tag);
      });

      let dropMenuElem = document.querySelector('div.drop-down-menu');
      let selectTagsElem = dropMenuElem.querySelector('select');

      addedTags.forEach(tag => {
        let tagOption = document.createElement('option');
        tagOption.innerHTML = tag;
        selectTagsElem.appendChild(tagOption);
      })
    }
  }

  window.FilterComponent = FilterComponent;
}();
