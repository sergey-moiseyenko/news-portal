;!function () {

  //desc
  //<-- when you called callback(onload function)
  //<-- you don't need to throw parameter called xhr, but better do it

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
        };

        xhr.onerror = () => {
          reject(new Error('Invalid data'));
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
        };

        xhr.onerror = () => {
          reject(new Error('Invalid data'));
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
        };

        xhr.onerror = () => {
          reject(new Error('Invalid data'));
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
          this.onload(resolve, xhr);
        };

        xhr.onerror = () => {
          reject(new Error('Invalid data'));
        }
      })
    }
  }

  window.PromiseWrapper = PromiseWrapper;
}();
