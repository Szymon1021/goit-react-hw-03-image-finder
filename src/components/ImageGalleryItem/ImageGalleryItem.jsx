import styles from './ImageGalleryItem.module.css';

export const ImageGalleryItem = props => {
  const photoslist = props.photos.map(({ id, webformatURL }) => {
    return (
      <li key={id} className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt="" className={styles.image} />
      </li>
    );
  });
  return <ul className={styles.ImageGallery}>{photoslist}</ul>;
};
