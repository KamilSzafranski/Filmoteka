const GALLERY = document.querySelector("ul.MainPage__Grid");
const GALLERY_TEMPLATE = document.querySelector("template.GalleryTemplate");
const NUMBEF_OF_PHOTO = 20;

export const createTemplateGallery = number => {
  for (let i = 0; i < number; i++) {
    GALLERY.append(GALLERY_TEMPLATE.content.cloneNode(true));
  }
};
