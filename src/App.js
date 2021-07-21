import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import Container from './components/Container'
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    showModal: false,
  };

  toogleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <>
        <Searchbar />

        <Container>

        <ImageGallery />

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
