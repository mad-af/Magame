import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { pages } from "../pages"

export default class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            isPlayed: false
        };
    };

    componentDidMount() {
        const login = localStorage.getItem("Login");
        const status = localStorage.getItem("Status");
        if (login) {
            if (login === "true") {
                this.setState({
                    isLoggedIn: true
                });
            };
        };
        if (status) {
            if (status === "played"){
                this.setState({
                    isPlayed: true
                });
            };
        };
    };

    _RenderApp() {
        return (
            <Switch>
                <Redirect to="/" />
                <Route exact path="/" component={pages.Home.Component} />
                <Route exact path="/record" component={pages.Record.Component}/>
            </Switch>
        );
    };

    _RenderGame() {
        return (
            <Switch>
                <Redirect to="/game" />
                <Route exact path="/game" component={pages.Game.Component} />
            </Switch>
        );
    };

    _RenderResult() {
        return (
            <Switch>
                <Redirect to="/result" />
                <Route exact path="/result" component={pages.Result.Component} />
            </Switch>
        );
    };

    render() {
        return (
            <BrowserRouter>
                {this.state.isLoggedIn ? 
                ( this.state.isPlayed ? this._RenderResult()
                : this._RenderGame() ) : this._RenderApp()}
            </BrowserRouter>
        )
    }
};