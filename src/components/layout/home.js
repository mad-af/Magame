import React, {Component} from "react";
import Button from '@material-ui/core/Button'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello Men</h1>
                <Button variant="contained" color="primary">
                    HelloWorld
                </Button>
            </div>
        );
    };
};

export default Home