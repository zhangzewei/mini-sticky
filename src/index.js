const isInWindowScreen = (ele, offset = 0) => {
  // if element's top is bigger than element's negative height and element's top is less than window's height
  // so that we can call this situation is element in the window screen now.
  if (!ele) return false;
  const windowHeight = window.innerHeight;
  const { top, height } = ele.getBoundingClientRect();
  return top <= offset && top > - windowHeight - height + offset;
};

function debounce(fn, wait) {
  let timer = null;
  return function () {
    if (timer !== null) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, wait);
  }
}

const miniSticky = (sticyElement, stickyAreaElement, offset = 0) => {
  if (!sticyElement) {
    return console.error('please set a element to sticky');
  }
  const sticyElementHeight = sticyElement.getBoundingClientRect().height;
  window.addEventListener('scroll', debounce(() => {
    const { top, height } = stickyAreaElement.getBoundingClientRect();
    console.log(1)
    const isInWindow = isInWindowScreen(stickyAreaElement);
    if (isInWindow) {
      sticyElement.style.transform = `translateY(${(-top > height) ? (height - sticyElementHeight) : -top + 20}px)`;
    } else {
      sticyElement.style.transform = 'translateY(0px)';
    }
  }, 24));
}

export { miniSticky, isInWindowScreen };