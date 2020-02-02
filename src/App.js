import React from 'react';
import './App.css';
import axios from 'axios';
import Original from './components/Original';
import DeleteConfession from './components/DeleteConfession';
import NewConfession from './components/NewConfession';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myConfessions: []
    }
    this.retrieveConfessions = this.retrieveConfessions.bind(this);
  }
  componentDidMount() {
    axios
        .get('/api/confessions')
        .then(res => this.setState({ myConfessions: res.data }))
        .catch(err => console.log(err));
  }
  retrieveConfessions(confessionsResponse) {
    this.setState({ myConfessions: confessionsResponse })
  }
  render() {
    return (
      <div>
        <NewConfession retrieveConfessions={this.retrieveConfessions}/>
        <DeleteConfession
          myConfessions={this.state.myConfessions} retrieveConfessions={this.retrieveConfessions}  />
      
      </div>
    );
  }
}

export default App;