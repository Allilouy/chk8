import React from 'react'
export default class Button extends React.Component {
    state = {
        display: 'none',
        selected: false
    }
    render() {
        return (
           
                <button onClick={this.props.onClick}
                    style={{ width: "150px", height: "50px", display:"inline" }}>
                    {this.props.children}
                </button>
             

        )
    }
}