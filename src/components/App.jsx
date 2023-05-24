import { Component } from 'react';
import { ImageFinder } from './ImageFinder/ImageFinder';
import { fetchPhotos } from 'components/api';
export class App extends Component {
  state = {
    photos: [],
  };

  handleGetRequest = async e => {
    e.preventDefault();

    const response = await fetchPhotos();

    this.setState({ photos: response.hits });
    console.log(this.state.photos);
  };

  render() {
    return <ImageFinder handleGetRequest={this.handleGetRequest}></ImageFinder>;
  }
}
