import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import ClientList from './components/ClientList'
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className='main-container'>
                    <h1>MAIN</h1>
                    <Navigation/>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ClientList}/>
                        </Switch>
                    </Router>
                </div>
            </div>
        </Provider>
    );
}

export default App;
