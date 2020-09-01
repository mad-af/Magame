import React, {Component} from "react";
import { withStyles } from '@material-ui/styles';

const isStyles = ({
    ul: {
      height: '4em',
      padding: '0 5em',
      display: 'flex',
      listStyle: 'none',
      alignItems: 'center',
      justifyContent: 'flex-end',
      // background: 'linear-gradient(0deg, rgba(255,255,255,0.) 0%, rgba(0,0,0,0) 40%)'
    },
    brand: {
      marginRight: 'auto',
    },
    li: {
      margin: '0 2em',
    },
  });

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <ul className= { classes.ul } >
                    <li className= { classes.brand }> Magame </li>
                    <li className= { classes.li }> dsada </li>
                    <li className= { classes.li }> dassd </li>
                </ul>
            </div>
        );
    };
};

export default withStyles(isStyles)(Navbar)