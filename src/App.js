import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import Filter from './components/Filter'

class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <MainContainer />
        <Filter />
      </div>
    );
  }
}

export default App;
