"use strict";

(function () {
  window.utils = {
    getRandomInt: (maxInt) => {
      const randomInt = Math.floor(Math.random() * maxInt);
      return randomInt;
    },
    getRandomArrayElement: (array) => {
      return array[window.utils.getRandomInt(array.length)];
    }
  };
})();
