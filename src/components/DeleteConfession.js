import React, { Component } from 'react';
import axios from 'axios';

export default class DeleteConfession extends Component {
    constructor() {
        super();
        this.state = {    
        }

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        axios
            .delete(`/api/confessions/${this.props.confession.id}`)
            .then(res => this.props.deleteConfession(res.data))
            .catch(err => console.log(err));
    }
    render() {
        return(
            <section  key={this.props.key}>
                <button onClick={this.handleDelete}>Delete</button>
            </section>
        )
    }
}