import { Component } from 'react';
import { ImageFinder } from './ImageFinder/ImageFinder';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { fetchPhotos } from 'components/api';

export class App extends Component {
  state = {
    photos: [],
    search: '',
  };
  handleInput = evt => {
    this.setState({
      search: evt.target.value,
    });
  };
  handleGetRequest = async e => {
    e.preventDefault();

    const response = await fetchPhotos(this.state.search);

    this.setState({ photos: response.hits });
    console.log(this.state.photos);
  };

  render() {
    return (
      <div>
        <ImageFinder
          handleGetRequest={this.handleGetRequest}
          handleInput={this.handleInput}
        ></ImageFinder>

        <ImageGalleryItem photos={this.state.photos}></ImageGalleryItem>
      </div>
    );
  }
}
