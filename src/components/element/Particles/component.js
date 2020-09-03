import React, {Component} from "react";
import Particle from "react-particles-js";


class Particles extends Component {

  isParams = {
    particles: {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 900
        }
      },
      "line_linked": {
        "enable": true,
        "opacity": 0.02
      },
      "move": {
        "enable": true,
        "speed": .5,
        "out_mode": "out"
      },
      "size": {
        "value": 1,
        "random": true
      },
      "opacity": {
        "anim": {
          "enable": true,
          "speed": 3,
          "opacity_min": 0.05
        }
      }
    },
    interactivity: {
      "events": {
        "onclick": {
          "enable": true,
          "mode": "repulse"
        }
      },
      "modes": {
        "repulse": {
          "distance": 100
        }
      }
    },
    retina_detect: true
  };

  render() {
      return (
          <div>
              <Particle  params={ this.isParams } />
          </div>
      );
  };
};

export default (Particles)