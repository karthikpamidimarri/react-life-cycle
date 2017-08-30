import React, { Component } from 'react'

class App extends Component {
  static displayName = "SomethingNew"

  constructor(props){
    super(props);
  }

  firstFunction(){
      console.log("First function is executing")
      console.log("Access the props"+this.props)
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
