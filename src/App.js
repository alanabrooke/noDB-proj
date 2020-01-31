import React, { Component } from 'react';
import Home from './components/Home/Home';
import Write from './components/Write/Write';
import axios from "axios";

class App extends Component {
    constructor() {
        super();
        this.state = {
            currentView: 'Home'
        };
    }

        render() {
            let { currentView } = this.state; 
            return (
                <div>
                    <button onClick={() => this.setState({currentView: "Home"})}>
                        Back to Shuffle
                    </button>
                    <button onClick={() => this.setState({currentView : 'Write'})}>
                        Write your own!
                    </button>
                    {currentView === "Home" ? <Home /> : <Write />}
                </div>
            );
        }
    }


export default App;
