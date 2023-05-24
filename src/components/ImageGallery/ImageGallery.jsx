import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './Image.Gallery.module.css';

export const ImageGallery = ({ ...photos }) => {
  const photoslist = photos.map(({ photo }) => {
    return (
      <ul key={photo.id} className={styles.ImageGallery}>
        <ImageGalleryItem id={photo.id} webformatURL={photo.webformatURL} />
      </ul>
    );
  });
  console.log(photos);
  return { photoslist };
};
