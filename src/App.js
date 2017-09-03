import React, { Component } from 'react'
import loggify from './loggify'
class App extends Component {
  state = {
      data: "No data yet!"
  }

  fetchData = () =>{
    console.log("Going to fetch Data")
    setTimeout(() => {
      console.log("Data retrieved")
      this.setState({
          data: Math.random()
      })
    },1500)
  }

  componentDidMount(){
    this.fetchData()
  }
  render() {
    return (
      <div>
        hello
        <h2>{this.state.data}</h2>
      </div>
    )
  }
}
App.displayName = "App"
App = loggify(App)

export default App
