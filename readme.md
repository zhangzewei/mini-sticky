## Tiny sticky
implace the sticky without css sticky, can use to set single element to sticky, also can set one element to sticky in some area element.

## Run demo
1. Install dependencies
```
npm install
```
2. Run dev 
```
npm start
```
3. Build
```
npm run build
```

## Browser adapting
use `getBoundingClientRect` to check element is at the screen window, and [can I use link of getBoundingClientRect](https://caniuse.com/?search=getBoundingClientRect);

And compiled with babel, so it can be used on at most 99% browsers.

## Useage
```js
import { stickyInArea, singleSticky } from './index.js';
const stickySelfEle = document.querySelector('.nav');
const stickyInAreaEle = document.querySelector('.nav.right');
const stickyAreaElement = document.querySelector('.main');
singleSticky(stickySelfEle);
stickyInArea(stickyInAreaEle, stickyAreaElement);
```

## Params
```ts
singleSticky(
  stickyElement: HtmlElement,
  scrollElement: HtmlElement | window,
  offset: number | 0
);

stickyInArea(
  stickyElement: HtmlElement,
  stickyAreaElement: HtmlElement,
  scrollEle: HtmlElement | window,
  offset: number | 0
);
```
