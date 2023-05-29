import styles from './Modal.module.css';

export const Modal = ({ photoForModal }) => {
  return (
    <div className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={photoForModal} alt="" />
      </div>
    </div>
  );
};
