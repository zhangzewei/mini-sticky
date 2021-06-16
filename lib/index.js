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

  return top <= offset && top > -windowHeight - height + offset;
};

exports.isInWindowScreen = isInWindowScreen;

function debounce(fn, wait) {
  var timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, wait);
  };
}

var miniSticky = function miniSticky(sticyElement, stickyAreaElement) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!sticyElement) {
    return console.error('please set a element to sticky');
  }

  var sticyElementHeight = sticyElement.getBoundingClientRect().height;
  window.addEventListener('scroll', debounce(function () {
    var _stickyAreaElement$ge = stickyAreaElement.getBoundingClientRect(),
        top = _stickyAreaElement$ge.top,
        height = _stickyAreaElement$ge.height;

    var isInWindow = isInWindowScreen(stickyAreaElement);

    if (isInWindow) {
      sticyElement.style.transform = "translateY(".concat(-top > height ? height - sticyElementHeight + offset : -top + offset + 20, "px)");
    } else {
      sticyElement.style.transform = 'translateY(0px)';
    }
  }, 24));
};

exports.miniSticky = miniSticky;