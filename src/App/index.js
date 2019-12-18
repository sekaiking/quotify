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
    constructor() {
        super();
        this.state = {
            quote: null,
            loading: false,
            welcome: true
        }
    }
    componentDidMount() {
        this.timout1 = setTimeout(() => {
            this.timout2 = this.setState({ welcome: false, loading: true });
            setTimeout(() => {
                this.setState({ welcome: false, loading: (this.state.quote == null ? true : false) });
            }, 1600);
        }, 1600);
        this.getQuote();
    }
    componentWillUnmount() {
        clearTimeout(this.timout1);
        clearTimeout(this.timout2);
    }
    render() {
        return (
            <Router>
                <Navbar onGenerate={this.getQuote.bind(this)} />
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
                <div id='title'>
                    <Switch>
                        <Route exact path="/">
                            <HomePage quote={this.state.quote} loading={this.state.loading} welcome={this.state.welcome} />
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
    getQuote() {
        this.setState({ quote: null, loading: true })

        let endpoint = 'https://cors-anywhere.herokuapp.com/'+'http://quotes.stormconsultancy.co.uk/random.json'; //to prevent CORS problems
        let apiKey = '9a916a23d7dceb5c5019cb24cc324551b483fc78';
        let reqPar = {
            header: {
                'Authorization': 'Token ' + apiKey
            },
            method: 'GET'
        };
        fetch(endpoint, reqPar)
            .then(res => {
                console.log(res);
                return res.json()
            })
            .then((res) => {
                console.log(res)
                this.setState({ quote: res.quote, loading: false })
            }).catch((err)=>{
                console.log(err);
            });

    }
}
