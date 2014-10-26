/*global exports */

exports.config = {

  ignore_build: ["bower_components"],
  ignore_processing: ["assets/templates", "assets/components"],
  port: 1500,

  assets: {

    js: {
      all: [
        "assets/js"
      ]
    },

    css: {
      all: [
        "assets/css/wishlist.css"
      ]
    }
  }
};
