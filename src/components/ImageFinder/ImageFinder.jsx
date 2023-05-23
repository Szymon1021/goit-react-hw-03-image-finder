import { Component } from 'react';
import styles from './ImageFinder.module.css';

export class ImageFinder extends Component {
  render() {
    return (
      <>
        <header className={styles.searchbar}>
          <form className={styles.searchform}>
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
  }
}
export default ImageFinder;
