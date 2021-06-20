"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.singleSticky = exports.stickyInArea = void 0;

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

var stickyInArea = function stickyInArea(stickyElement, stickyAreaElement) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var scrollEle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : window;

  if (!stickyElement) {
    return console.error('please set a element to sticky');
  }

  var stickyElementHeight = stickyElement.getBoundingClientRect().height;
  scrollEle.addEventListener('scroll', function () {
    return window.requestAnimationFrame(function () {
      var _stickyAreaElement$ge = stickyAreaElement.getBoundingClientRect(),
          top = _stickyAreaElement$ge.top,
          height = _stickyAreaElement$ge.height;

      var isInWindow = isInWindowScreen(stickyAreaElement);
      var totalHeight = height - stickyElementHeight;

      if (isInWindow) {
        stickyElement.style.transform = "translateY(".concat(-top >= totalHeight ? totalHeight + offset : -top + offset, "px)");
      } else {
        stickyElement.style.transform = 'translateY(0px)';
      }
    });
  });
};

exports.stickyInArea = stickyInArea;

var singleSticky = function singleSticky(stickyElement, scrollElement) {
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  if (!stickyElement) {
    return console.error('please set a element to sticky');
  }

  var _scrollElement = scrollElement || window;

  _scrollElement.addEventListener('scroll', function () {
    return window.requestAnimationFrame(function () {
      var scrollTop = scrollElement ? _scrollElement.scrollTop : _scrollElement.scrollY;
      var isScrollOutScreen = stickyElement.getBoundingClientRect().top < 0;

      if (isScrollOutScreen) {
        stickyElement.style.transform = "translateY(".concat(scrollTop - stickyElement.offsetTop + offset, "px)");
      } else {
        stickyElement.style.transform = 'translateY(0px)';
      }
    });
  });
};

exports.singleSticky = singleSticky;