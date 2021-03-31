const isInWindowScreen = (ele, offset = 0) => {
  // if element's top is bigger than element's negative height and element's top is less than window's height
  // so that we can call this situation is element in the window screen now.
  if (!ele) return false;
  const windowHeight = window.innerHeight;
  const { top, height } = ele.getBoundingClientRect();
  return top >= (offset - height) && top < (windowHeight - offset - height);
};

const miniSticky = (ele, target, offset = 0) => {
  if (!ele) {
    return console.error('please set a element to sticky');
  }
  const { height } = ele.getBoundingClientRect();
  const placeholder = document.createElement('div');
  placeholder.style.height = `${height}px`;
  placeholder.style.width = '1px';
  window.addEventListener('scroll', () => {
    const isInWindow = isInWindowScreen(target);
    if (isInWindow) {
      setTimeout(() => {
        ele.style.position = 'relative';
        ele.style.top = null;
        placeholder.remove();
      }, 100)
    } else {
      setTimeout(() => {
        ele.style.position = 'fixed';
        ele.style.top = `${offset}px`;
        target.insertAdjacentElement('afterend', placeholder);
      }, 100);
    }
  });
}

export {miniSticky, isInWindowScreen};