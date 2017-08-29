import React, { Component } from 'react'

class App extends Component {
  static displayName = "SomethingNew"

  state={
    ourInitialState: "golden"
  }
  render() {
    console.log(this.state)
    return (
        <h1>hello</h1>
    )
  }
}


export default App
