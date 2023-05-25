import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './Image.Gallery.module.css';

export const ImageGallery = ({ photos }) => {
  return (
    <ul className={styles.ImageGallery}>
      {photos.map(photo => {
        return (
          <ImageGalleryItem key={photo.id} webformatURL={photo.webformatURL} />
        );
      })}
    </ul>
  );
};
