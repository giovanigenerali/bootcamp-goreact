import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import './style.scss'

import Button from './Button'

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render () {
    return (
      <Fragment>
        <h1>Hello GoReact</h1>
        <h2 className="counter">{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
