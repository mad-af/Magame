import React, {Component} from "react";
import { withStyles } from '@material-ui/styles';

const isStyles = ({
    navbar: {
      background: "rgba( 232, 237, 242, .7 )",
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'center',
    },
    section: {
      width: '70%',
      height: '3em',
      padding: '0 .5em',
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    ul: {
      width: '10em',
      padding: '0 0 0 .5em',
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'space-between',
    }
  });

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
          <div>
            <nav className= { classes.navbar } >
              <section className= { classes.section } >
                <span className= { classes.brand }> Magame </span>
                <ul className= { classes.ul } >
                    <li className= { classes.li }> dsada </li>
                    <li className= { classes.li }> dassd </li>
                </ul>
              </section>
            </nav>
          </div>
        );
    };
};

export default withStyles(isStyles)(Navbar)