;!function () {

  class FilterViewComponent{

    constructor(onSignIn, onAdd, tags) {
      this.onSignIn = onSignIn;
      this.onAdd = onAdd;
      this.tags = tags;
    }

    render() {

      let view = '<div class="field">' +
        '<label for="input-tags" class="label-text">Input tags</label>' +
        '<input type="text" id="input-tags" class="input-text" placeholder="Tags"/>' +
        '<div class="clear"></div>' +
        '<div class="select-tags">' +
        '<select>' +
        '<option disabled>Tag list</option>' +
        '</select>' +
        '</div>' +
        '<div class="add-tag-button">' +
        '<input type="button" value="add"/>' +
        '</div>' +
        '</div>'+
        '<div class="clear"></div>' +
        '<div class="field">' +
        '<label for="input-author" class="label-text">Input Author</label>'+
        '<input type="text" id="input-author" class="input-text" placeholder="Author"/>'+
        '</div>'+
        '<div class="field">'+
        '<label for="input-date" class="label-text">Input Date</label>'+
        '<input type="text" id="input-date" class="input-text" placeholder="Date"/>'+
        '</div>' +
        '<div class="filtration-button">' +
        '<button>' +
        'Search' +
        '</button>' +
        '</div>'  ;

      let filterViewElem = document.createElement('div');
      filterViewElem.className = 'filtration-frame';
      filterViewElem.innerHTML = view;
      let selectElem = filterViewElem.querySelector('select');
      this.tags.forEach(tag => {
        let tagOption = document.createElement('option');
        tagOption.innerHTML = tag;
        selectElem.appendChild(tagOption);
      });
      filterViewElem.querySelector('div.add-tag-button').addEventListener('click', this.onAddClicked.bind(this));
      filterViewElem.querySelector('div.filtration-button').addEventListener('click', this.signInClicked.bind(this));

      return filterViewElem;
    }

    signInClicked() {
      let filter = {};
      let tagElement = document.getElementById('input-tags');
      let tags = tagElement.value.split(' ');
      if (tags.length != 0) filter.tags = tags;
      let authorElement = document.getElementById('input-author');
      if (authorElement.value) filter.author = authorElement.value;
      let dateElement = document.getElementById('input-date');
      if (Date.parse(dateElement.value)) filter.createdAt = new Date(dateElement.value);

      this.onSignIn(filter);
    }

    onAddClicked() {
      let tags = document.getElementById('input-tags').value.split(' ');
      this.onAdd(tags);
    }
  }

  window.FilterViewComponent = FilterViewComponent;
}();
