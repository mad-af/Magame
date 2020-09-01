import React, {Component} from "react";
import Particle from "react-particles-js";
import { withStyles } from '@material-ui/styles';

const isStyles = ({
  screen:{
    overflow: 'hidden',
  }
});

class Particles extends Component {
  render() {
    const { classes } = this.props;
      return (
          <div>
              <Particle className={ classes.screen } />
          </div>
      );
  };
};

export default withStyles(isStyles)(Particles)