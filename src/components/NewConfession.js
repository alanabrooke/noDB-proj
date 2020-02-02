import React, {Component} from 'react';
import axios from 'axios';

export default class NewConfession extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        axios
            .post('/api/confessions', this.state)
            .then(res => this.props.retrieveConfessions(res.data))
            .catch(err => console.log(err));
    }
    render() {
        return (
            <section>
                <p>Confession Time!</p>
                <input placeholder='Share your secrets here :)' onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit</button>
            </section>
        )
    }
}
