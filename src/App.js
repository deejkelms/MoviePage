import React, { Component } from 'react';
import './App.css';

import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <MainContent />
      </div>
    );
  }
}

export default App;
