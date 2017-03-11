;!function () {
  'use strict';

  let util = {};

  util.skipNumberValid = (skip = 0, length = 0) => {
    if (skip < 0) return 0;
    return (skip > length) ? length : skip;
  };

  util.topNumberValid = (top = 10) => {
    if (top < 0) return 10;
  };

  window.util = util;
}();
