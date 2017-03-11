;!function (config) {
  'use strict';

  let util = {};

  util.skipNumberValid = (skip = config.SKIP_DEFAULTS, length = 0) => {
    if (skip < 0) return config.SKIP_DEFAULTS;
    return (skip > length) ? length : skip;
  };

  util.topNumberValid = (top = config.TOP_DEFAULTS) => {
    if (top < 0) return config.TOP_DEFAULTS;
    return top;
  };

  window.util = util;
}(window.CONFIG);
