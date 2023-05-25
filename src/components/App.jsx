import { Component } from 'react';
import { ImageFinder } from './ImageFinder/ImageFinder';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchPhotos } from 'components/api';
import { Button } from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    photos: [],
    search: '',
    page: 1,
    isLoading: false,
  };
  handleInput = evt => {
    this.setState({
      search: evt.target.value,
    });
  };
  handleGetRequest = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });

    const response = await fetchPhotos(this.state.search);

    this.setState({
      photos: response.hits,
      isLoading: false,
    });
    console.log(this.state.photos);
  };
  async componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      const photos = await fetchPhotos(this.state.search, this.state.page);
      console.log(photos);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...photos.hits],
      }));
    }
  }

  handleButton = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <ImageFinder
          handleGetRequest={this.handleGetRequest}
          handleInput={this.handleInput}
        ></ImageFinder>
        <div>{this.state.isLoading ? <Loader /> : null}</div>
        <ImageGallery photos={this.state.photos}></ImageGallery>
        {this.state.photos.length > 0 ? (
          <Button handleButton={this.handleButton} />
        ) : null}
      </div>
    );
  }
}
