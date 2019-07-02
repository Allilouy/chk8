import React from 'react'
export default class Content extends React.Component {
    render() {
        return (<div>
            <h1 >
                {this.props.title}
            </h1>
            <img src={this.props.src} alt=""></img>}
<p>
                {this.props.descri}
            </p></div>)
    }
}