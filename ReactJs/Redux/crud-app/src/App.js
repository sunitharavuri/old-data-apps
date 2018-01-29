import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import GamesPage from './GamesPage';
import './App.css';


class App extends Component {
    render() {
        return ( <div className = "App" >
             <Link to = "/games" > Games </Link> 
            {/* <Match pattern = "/games"
            component = { GamesPage }/>  */}
            </div >
        );
    }
}

export default App;