import { Component } from 'react';
import { ImageFinder } from './ImageFinder/ImageFinder';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotos } from 'components/api';

export class App extends Component {
  state = {
    photos: [],
    search: '',
    page: 1,
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
  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      const photos = fetchPhotos(this.state.search, this.state.page);
      this.setState({ photos });
    }
  }

  render() {
    return (
      <div>
        <ImageFinder
          handleGetRequest={this.handleGetRequest}
          handleInput={this.handleInput}
        ></ImageFinder>
        <ImageGallery photos={this.state.photos}></ImageGallery>
        <button onClick={() => this.setState({ page: this.state.page + 1 })}>
          Load more
        </button>
      </div>
    );
  }
}
