import styles from './ImageFinder.module.css';

export const ImageFinder = props => {
  return (
    <>
      <header className={styles.searchbar}>
        <form onSubmit={props.handleGetRequest} className={styles.searchform}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonlabel}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
      <main>
        <div>
          <ul className={styles.ImageGallery}>
            <li></li>
          </ul>
        </div>
      </main>
    </>
  );
};
