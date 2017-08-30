import React, { Component } from 'react'
import loggify from './loggify'
class App extends Component {

  render() {
    return (
      <div>
        hello
      </div>
    )
  }
}
App = loggify(App)

export default App
