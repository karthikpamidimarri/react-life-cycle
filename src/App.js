import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
        <h1>hello</h1>
    )
  }
}

function myTestWrapper(WrappedComponent) {
  return class extends Component{
    render(){
      return(
          <div style={{backgroundColor:"blue"}}>
              <WrappedComponent/>
          </div>
      )
    }
  }
}

App = myTestWrapper(App)
export default App
