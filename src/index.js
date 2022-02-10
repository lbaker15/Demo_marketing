import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Work from './components/work';
import Contact from './components/contact';
import reducer from './reducers/reducer';
import './scss/main.scss';

class App extends React.Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/">
                        <Nav />
                        <Home />
                    </Route>
                    <Route path="/about">
                        <Nav />
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Nav />
                        <Contact />
                    </Route>
                    <Route path="/work">
                        <Nav />
                        <Work />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

const store = createStore(reducer);

render(<Provider store={store}><App /></Provider>, document.getElementById("root"));