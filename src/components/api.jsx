const API_KEY = '35164837-0ab1384cb421b93089bd8e9f9';
const perPage = 12;
const page = 1;
export const fetchPhotos = async search => {
  const response = await fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  );

  const photos = await response.json();
  return photos;
};
