import React, { Component } from 'react'

export class Home extends Component {
  constructor (props) {
    super()
    this.state = {
      age: props.user.initialAge,
      homeLink: 'Change Link'
    }
  }
  onMakeOlder (props) {
    this.setState({
      age: this.state.age += 2
    })
  }

  onChangeLink () {
    this.props.link(this.state.homeLink)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <h1>My name is {this.props.user.name}, and i'm {this.state.age} years old!</h1>
        <h4>{this.props.user.title}</h4>
        <h6>{this.props.user.location}</h6>
        <div>
          {this.props.children}
        </div>
        <hr />
        <button onClick={this.onMakeOlder.bind(this)} className='btn btn-primary'> Make Me Older</button>
        <hr />
        <button onClick={this.props.greet} className='btn btn-primary'> Greet</button>
        <hr />
        <button onClick={this.onChangeLink.bind(this)} className='btn btn-success'>Change Header</button>
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
