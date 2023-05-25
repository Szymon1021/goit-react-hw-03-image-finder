import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={styles.image} />
    </li>
  );
};
