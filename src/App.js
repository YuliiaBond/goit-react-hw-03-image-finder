import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Container from './components/Container'
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal/Modal';
import hitsApi from './services/hits-api';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    currentPage: 1,
    isLoading: false,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
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

    hitsApi.fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

  }

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, isLoading, showModal, error } = this.state;
    return (
      <>
        {error && <h1>ERROR!!!</h1>}

        <Searchbar onSubmit={this.onChangeQuery}/>

        <Container>

          <ImageGallery
          hits={hits}
          />

          {isLoading && (
            <h1>Loading...</h1>
          )}

          {hits.length > 0 && !isLoading && (
            <button type="button" onClick={this.fetchHits}>
            Load more
          </button>
          )}
          

        <button type="button" onClick={this.toogleModal}>
          Open modal
        </button>

        {showModal && (
          <Modal onClose = {this.toogleModal}>
            <img src="" alt="" />
            <button type="button" onClick={this.toogleModal}>Close</button>
          </Modal>
        )
        }
        </Container>
        </>
    );
  }
};
            
      


export default App;
