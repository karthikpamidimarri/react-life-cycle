import React, { Component } from 'react'

class App extends Component {
  static defaultProps = {
    someImportArray:[]
  }
  render() {
    console.log(this.props)
    return (
        <h1>hello</h1>
    )
  }
}

App.displayName = "WhatEverWeWant"


export default App
