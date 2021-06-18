const isInWindowScreen = (ele, offset = 0) => {
  // if element's top is bigger than element's negative height and element's top is less than window's height
  // so that we can call this situation is element in the window screen now.
  if (!ele) return false;
  const windowHeight = window.innerHeight;
  const { top, height } = ele.getBoundingClientRect();
  return top <= offset && top > - windowHeight - height + offset;
};

const tinySticky = (sticyElement, stickyAreaElement, offset = 0) => {
  if (!sticyElement) {
    return console.error('please set a element to sticky');
  }
  const sticyElementHeight = sticyElement.getBoundingClientRect().height;
  window.addEventListener('scroll', () => window.requestAnimationFrame(() => {
    const { top, height } = stickyAreaElement.getBoundingClientRect();
    const isInWindow = isInWindowScreen(stickyAreaElement);
    if (isInWindow) {
      sticyElement.style.transform = `translateY(${(-top > height) ? (height - sticyElementHeight + offset) : -top + offset + 20}px)`;
    } else {
      sticyElement.style.transform = 'translateY(0px)';
    }
  }));
}

export { tinySticky, isInWindowScreen };