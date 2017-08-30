import React, { Component } from 'react'

class App extends Component {
  static displayName = "SomethingNew"

  constructor(props){
    super(props)

    this.firstFunction = this.firstFunction.bind(this)
  }

  firstFunction(){
      console.log("First function is executing")
      console.log(this.props)
  }

  arrowFunction = () => {
      console.log("this arrowFunction works without bind")
      console.log(this.props)
  }

  render() {
  console.log(this.state)
    return (
      <div>
        <button onClick={this.firstFunction}>Click First function</button>
        <button onClick={this.arrowFunction}>Click Arrow function</button>
      </div>
    )
  }
}


export default App
