# mau Gallery (updated to Bootstrap 5)

[forked from bakedbird/mauGallery](https://github.com/bakedbird/mauGallery)

Bootstrap 5 Gallery, vanilla JS.

## New features

- Removed JQuery (+ updated to Bootstrap 5.2.3)
- Complete keyboard navigation
- Swipable gallery modal on tablet/mobile
- Enhanced mobiles compatibility
- Pictures HTMLDom compatible (and also responsive images compatible)
- Configurable CSS
- Intelligent modal sizing
- Intelligent scroll on modal quit
- Some minor pagespeed optimizations (dynamic modal images lazyloading)
- Multiple galleries on a single page
- Loading/disabled JS environment placeholders

## Two imports scenarios

```html
<script src="./assets/maugalleryLauncher.js" async></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer></script>
<script src="./assets/maugallery.js" defer></script>
```

### Demo

[https://gustavewpm.github.io/enhanced-mauGallery/](https://gustavewpm.github.io/enhanced-mauGallery/)

#### CLS issues

[_Pagespeed Insights_](https://pagespeed.web.dev/) may sometimes indicate a high CLS on the demo page of this project.  
When the JavaScript code executes quickly enough, this does not occur. However, due to the unpredictable nature of web environments, the code might not execute fast enough, causing CLS to spike.

This happens because the placeholders used in this project do not have heights matching those of gallery elements once they are loaded. In this case, [_Pagespeed Insights_](https://pagespeed.web.dev/)
detects the replacement of these placeholders by gallery elements, leading to a significant CLS increase.

It is up to you to consider this point and adjust your placeholders so that this CLS issue does not occur, regardless of how quickly the JavaScript code is executed.

---

## Original README.md

# mau Gallery

A simple images gallery made with jQuery and bootstrap4

## Notice: This package will soon be deprecated in favour of a next, improved version. Use with caution
