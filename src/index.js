const isInWindowScreen = (ele, offset = 0) => {
  // if element's top is bigger than element's negative height and element's top is less than window's height
  // so that we can call this situation is element in the window screen now.
  if (!ele) return false;
  const windowHeight = window.innerHeight;
  const { top, height } = ele.getBoundingClientRect();
  return top <= offset && top > - windowHeight - height + offset;
};

const stickyInArea = (
  stickyElement,
  stickyAreaElement,
  offset = 0,
  scrollEle = window
) => {
  if (!stickyElement) {
    return console.error('please set a element to sticky');
  }
  const stickyElementHeight = stickyElement.getBoundingClientRect().height;
  scrollEle.addEventListener('scroll', () => window.requestAnimationFrame(function () {
    const { top, height } = stickyAreaElement.getBoundingClientRect();
    const isInWindow = isInWindowScreen(stickyAreaElement);
    const totalHeight = height - stickyElementHeight;
    if (isInWindow) {
      stickyElement.style.transform = `translateY(${(-top >= totalHeight) ? totalHeight + offset : -top + offset}px)`;
    } else {
      stickyElement.style.transform = 'translateY(0px)';
    }
  }));
}

const singleSticky = (
  stickyElement,
  scrollElement,
  offset = 0
) => {
  if (!stickyElement) {
    return console.error('please set a element to sticky');
  }
  const _scrollElement = scrollElement || window;
  _scrollElement.addEventListener('scroll', () => window.requestAnimationFrame(function () {
    const scrollTop = scrollElement ? _scrollElement.scrollTop : _scrollElement.scrollY;
    const isScrollOutScreen = stickyElement.getBoundingClientRect().top < 0;
    if (isScrollOutScreen) {
      stickyElement.style.transform = `translateY(${scrollTop - stickyElement.offsetTop + offset}px)`;
    } else {
      stickyElement.style.transform = 'translateY(0px)';
    }
  }));
}

export { stickyInArea, singleSticky };