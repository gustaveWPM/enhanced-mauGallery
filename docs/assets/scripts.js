document.addEventListener("DOMContentLoaded", () => {
  const opt = {
    'columns': {
      'xs': 1,
      'sm': 2,
      'md': 3,
      'lg': 4,
      'xl': 6
    },
    'lightBox': true,
    'lightboxId': 'myAwesomeLightbox',
    'showTags': true,
    'tagsPosition': 'top'
  };
  mauGallery(opt);
});
