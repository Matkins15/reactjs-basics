import React, { Component } from 'react'
import { render } from 'react-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends Component {
  constructor () {
    super()
    this.state = {
      homeLink: 'Home'
    }
  }
  onGreet () {
    console.log('Hello Suckers')
  }

  onChangeLinkName (newName) {
    this.setState({
      homeLink: newName
    })
  }

  render () {
    let user = {
      name: 'Matthew Atkins',
      title: 'Front-End-Developer',
      location: 'Atlanta, GA',
      initialAge: 30
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header homeLink={this.state.homeLink} />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home user={user} greet={this.onGreet} link={this.onChangeLinkName.bind(this)}>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Home>
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
