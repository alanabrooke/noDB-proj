import React, {Component} from 'react';


export default class DefaultConfessions extends React.Component {
    render() {
        const confessionsArray = this.props.confessions.map((confession, index) => {
            return (
                <DefaultConfessions
                    confession={confession} key={index}
                    retrieveConfessions={this.props.retrieveConfessions}
                />
            )
        }).reverse();

        return (
            <section>
                {confessionsArray}
            </section>
        )
    }
}