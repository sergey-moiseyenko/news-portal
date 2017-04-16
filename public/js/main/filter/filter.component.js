;!function(config) {

  class FilterComponent {

    render() {
      tagService.getArticleTags().then(tags => {
        let filterViewElement = new FilterViewComponent(this.signInClicked.bind(this), this.addClicked.bind(this), tags).render();
        let dropMenuElem = document.querySelector('div.drop-down-menu');
        dropMenuElem.insertBefore(filterViewElement, dropMenuElem.firstElementChild);
      });
    }

    signInClicked(filter) {
      console.log(filter);
      new ArticleListPageComponent().init(undefined, filter);
    }

    addClicked(tags = []) {
      if (!tags) return;

      console.log(tags);
      let addedTags = [];
      tags.forEach(tag => {
        if (config.TAGS.indexOf(tag) != -1) return tag;
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
}(window.CONFIG);
