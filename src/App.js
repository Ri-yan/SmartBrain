import React from 'react';
import './App.css';
import Navigation from './components/Navigation'
import ImageLinkForm from'./components/ImageLinkForm'
import Logo from './components/Logo';
import Rank from './components/Rank';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 65,
      density: {
        enable: true,
        value_area: 750
      }
    }
  }, "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }

}
// {
//       "particles": {
//           "number": {
//               "value": 50
//           },
//           "size": {
//               "value": 3
//           }
//       },
//       "interactivity": {
//           "events": {
//               "onhover": {
//                   "enable": true,
//                   "mode": "repulse"
//               }
//           }
//       }
//   }
class App extends React.Component {
    render() {
      return (
      <div className="App " >
       <Particles className="particles" 
          params={particlesOptions}
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


