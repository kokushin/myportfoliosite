import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div class="container">
        <Header />
          <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
