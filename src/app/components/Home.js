import React, { Component } from 'react'

export class Home extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <h4>{this.props.user.title}</h4>
        <h6>{this.props.user.location}</h6>
        <div>
          {this.props.children}
        </div>

      </div>
    )
  }
}

// Home.propTypes = {
//   name: React.PropTypes.string,
//   title: React.PropTypes.string,
//   location: React.PropTypes.string,
//   age: React.PropTypes.number
// }
