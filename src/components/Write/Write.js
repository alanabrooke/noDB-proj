import React, { Component } from "react";

class Write extends Component {
    constructor(){
        super();
        this.state = {
            val: ''
        }




    }
  render() {
    return (
      <div>
        <h1>Confession time!</h1>
        <input placeholder='Write confession here'/>
        <button id = 'submit'>Submit</button>
      </div>
    );
  }
  
}

export default Write;