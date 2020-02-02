import React from 'react';
import './App.css';
import axios from 'axios';
import DefaultConfessions from './components/DefaultConfessions';
import DeleteConfession from './components/DeleteConfession';
import NewConfession from './components/NewConfession';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      confessions: []
    }
    this.retrieveConfessions = this.retrieveConfessions.bind(this);
  }
  componentDidMount() {
    axios
        .get('/api/confessions')
        .then(res => this.setState({ confessions: res.data }))
        .catch(err => console.log(err));
  }
  retrieveConfessions(confessionsRes) {
    this.setState({ confessions: confessionsRes })
  }
  render() {
    return (
      <div className="App">
        {/* <NewConfession retrieveConfessions={this.retrieveConfessions}/>
        <Confessions 
          confessions={this.state.confessions} retrieveConfessions={this.retrieveConfessions}  */}
        {/* /> */}
      
      </div>
    );
  }
}

export default App;