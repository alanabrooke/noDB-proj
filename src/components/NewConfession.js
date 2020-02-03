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
    handleChange(e) {
        this.setState({value: e.target.value});
        console.log(e.target.value)
    }
    

    handleClick() {
        axios
            .put('/api/confessions', this.state)
            .then(res => this.props.getConfessions(res.data))
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
