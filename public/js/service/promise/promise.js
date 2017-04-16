;!function () {

  class PromiseWrapper{

    constructor(url, onload) {
      this.url = url;
      this.onload = onload;
    }

    get() {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', this.url, true);
        xhr.send();

        xhr.onload = () => {
          this.onload(resolve, xhr);
        }
      })
    }

    patch(value) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('PATCH', this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(value));

        xhr.onload = () => {
          this.onload(resolve);
        }
      })
    }

    delete(value) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(value));

        xhr.onload = () => {
          this.onload(resolve);
        }
      })
    }

    post(value) {
      return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(value));

        xhr.onload = () => {
          this.onload(resolve);
        }
      })
    }
  }

  window.PromiseWrapper = PromiseWrapper;
}();
