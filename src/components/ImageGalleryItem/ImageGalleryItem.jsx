import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL }) => {
  return (
    <li key={id} className={styles.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={styles.image} />
    </li>
  );
};
