import React, { Component } from 'react';
import ReactModal from 'react-modal';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import About from './components/About';

ReactModal.setAppElement('#root');

class App extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    }

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleAfterOpenModal = this.handleAfterOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(e) {
    e.preventDefault();
    this.setState({showModal: true});
  }

  handleAfterOpenModal() {
    console.log('👐');
  }

  handleCloseModal(e) {
    e.preventDefault();
    this.setState({showModal: false});
  }

  render() {
    return (
      <div className="container">
        <Header handleOpenModal={this.handleOpenModal} />
          <Content />
        <Footer handleOpenModal={this.handleOpenModal} />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="About"
          onAfterOpen={this.handleAfterOpenModal}
          onRequestClose={this.handleCloseModal}
          className="uc-modal"
          overlayClassName="uc-modal-overlay"
        >
          <About handleCloseModal={this.handleCloseModal} />
        </ReactModal>
      </div>
    );
  }
}

export default App;