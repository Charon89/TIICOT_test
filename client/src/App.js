import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import ClientList from './components/ClientList'
import Search from './components/Search'
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className='main-container'>
                    <h1>TIICOT Exam for Web Application Developers </h1>
                    <Router>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" component={ClientList}/>
                            <Route exact path="/search" component={Search}/>
                            <Route exact path="/clients/:firstName" component={ClientList}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </Provider>
    );
}

export default App;
