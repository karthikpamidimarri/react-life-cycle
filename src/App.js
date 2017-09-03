import React, { Component } from 'react'
import loggify from './loggify'
class App extends Component {

  fetchData = () =>{
    console.log("Going to fetch Data")
    setTimeout(() => {
      console.log("Data retrieved")
      this.setState({
          data: Math.random
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
      </div>
    )
  }
}
App.displayName = "App"
App = loggify(App)

export default App
