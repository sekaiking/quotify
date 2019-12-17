import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from '../components/Home';
import AboutPage from '../components/About';
import NotFoundPage from '../components/NotFound';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class app extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/about">
                                <AboutPage />
                            </Route>
                            <Route>
                                <NotFoundPage />
                            </Route>
                        </Switch>
                </div>
                <Footer />
            </Router>
        )
    }
}
