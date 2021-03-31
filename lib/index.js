"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isInWindowScreen = exports.miniSticky = void 0;

var isInWindowScreen = function isInWindowScreen(ele) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // if element's top is bigger than element's negative height and element's top is less than window's height
  // so that we can call this situation is element in the window screen now.
  if (!ele) return false;
  var windowHeight = window.innerHeight;

  var _ele$getBoundingClien = ele.getBoundingClientRect(),
      top = _ele$getBoundingClien.top,
      height = _ele$getBoundingClien.height;

  return top >= offset - height && top < windowHeight - offset - height;
};

exports.isInWindowScreen = isInWindowScreen;

var miniSticky = function miniSticky(ele, target) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!ele) {
    return console.error('please set a element to sticky');
  }

  var _ele$getBoundingClien2 = ele.getBoundingClientRect(),
      height = _ele$getBoundingClien2.height;

  var placeholder = document.createElement('div');
  placeholder.style.height = "".concat(height, "px");
  placeholder.style.width = '1px';
  window.addEventListener('scroll', function () {
    var isInWindow = isInWindowScreen(target);

    if (isInWindow) {
      setTimeout(function () {
        ele.style.position = 'relative';
        ele.style.top = null;
        placeholder.remove();
      }, 100);
    } else {
      setTimeout(function () {
        ele.style.position = 'fixed';
        ele.style.top = "".concat(offset, "px");
        target.insertAdjacentElement('afterend', placeholder);
      }, 100);
    }
  });
};

exports.miniSticky = miniSticky;