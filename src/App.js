import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import ImageLinkForm from'./components/ImageLinkForm'
import Logo from './components/Logo';
import Rank from './components/Rank';
import Particles from 'react-particles-js';

class App extends React.Component {
    render() {
      return (
      <div className="App">
      <Particles />
        <Navigation />
        <Logo />
        <Rank/>
        <ImageLinkForm/>
        {/*<FaceRecognition/>*/}
      </div>
    );
  }
}

export default App;


