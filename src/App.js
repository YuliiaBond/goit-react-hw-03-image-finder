import React, { Component } from 'react';
import axios from 'axios';
import Searchbar from './components/Searchbar';
import Container from './components/Container'
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal/Modal';

// axios.defaults.headers.common['Authorization'] = 'Bearer 21813787-5b33d57d4a7410a6824d2f569';

class App extends Component {
  state = {
    hits: [],
    showModal: false,
  };

  onChangeQuery = query => {
    axios
      .get(
        `https://pixabay.com/api/?q=${query}&page=1&key=21813787-5b33d57d4a7410a6824d2f569&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(response => {
        this.setState({
          hits: response.data.hits
        });
      });
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { hits, showModal } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery}/>

        <Container>

          <ImageGallery
          hits={hits}
          />

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
