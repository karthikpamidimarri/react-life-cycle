import React, { Component } from 'react'

class App extends Component {

  render() {
    console.log(this.props)
    return (
        <h1>hello</h1>
    )
  }
}

App.displayName = "WhatEverWeWant"

App.defaultProps = {
  someImportArray:[]
}
export default App
