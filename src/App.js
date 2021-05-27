import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import ImageLinkForm from'./components/ImageLinkForm'
import Logo from './components/Logo';
import Rank from './components/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles: {
    number:{
      value:30,
      density: {
        enable: true,
        value_area:800
      }
    }
  }
}

class App extends React.Component {
    render() {
      return (
      <div className="App">
      <Particles className='particles'
                params={particleOptions} 
                />
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


