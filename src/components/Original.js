import React, {Component} from 'react';


export default class Original extends Component {
    render() {
        const confessionsArray = this.props.myConfessions.map((confession, index) => {
            return (
                <Original
                    confession={confession} key={index}
                    getConfessions={this.props.getConfessions}
                />
            )
        })

        return (
            <section>
                {confessionsArray}
            </section>
        )
    }
}