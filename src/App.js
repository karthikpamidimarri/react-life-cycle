import React, { Component } from 'react'

class App extends Component {
  static displayName = "SomethingNew"

  constructor(props){
      super(props)
      this.state = {
          whateverValue: "we want"
      }
  }

  render() {
    console.log(this.state)
    return (
        <h1>hello</h1>
    )
  }
}


export default App