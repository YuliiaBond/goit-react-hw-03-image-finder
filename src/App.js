import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Container from './components/Container'
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader'
import Modal from './components/Modal/Modal';
import Button from './components/Button';
import hitsApi from './services/hits-api';
import PropTypes from 'prop-types';
import './style.css';

class App extends Component {
  static propTypes = {
    hits: PropTypes.array,
    searchQuery: PropTypes.string,
    currentPage: PropTypes.number,
    isLoading: PropTypes.bool,
    showModal: PropTypes.bool,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
    error: PropTypes.string,
  }
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
    tags: '',
    error: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    };

    if (this.state.searchQuery !== 2 && prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  };

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, hits: [], error: null });
  };

  fetchHits = () => {
    const { searchQuery, currentPage } = this.state;

    const options = {
      searchQuery,
      currentPage,
    };

    this.setState({ isLoading: true });

    hitsApi(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error: 'Sorry! Picture not found. Please try again later!!!' }))
      .finally(() => this.setState({ isLoading: false }));

  }

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onOpenModalImg = (largeImageURL = '') => {
    this.setState({ largeImageURL });
    this.toogleModal();
  };

  render() {
    const { hits, isLoading, showModal, largeImageURL, tags, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        
        {error && <h1>{error}</h1>}

        <Container>

          <ImageGallery
            hits={hits}
            onOpenModalImg={this.onOpenModalImg}
          />

          {isLoading && <Loader/>}

          {hits.length > 11 && !isLoading && (
            <Button onClick={this.fetchHits} />
          )}
          
        {showModal && (
          <Modal onClose = {this.onOpenModalImg}>
            <img src={largeImageURL} alt={tags} />
            {/* <button type="button" onClick={this.toogleModal}>Close</button> */}
          </Modal>
        )
        }
        </Container>
        </>
    );
  }
};
            
      


export default App;
