import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SideBar from './SideBar';
import MainContent from './MainContent';

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
