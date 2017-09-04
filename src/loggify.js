import React, {Component} from 'react'
import styled from 'styled-components'

export default function loggify(WrappedComponent) {


    let originals = {}

    const methodsToLog = [
        "componentWillMount",
        "componentDidMount",
        "componentWillUnmount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate"
    ]

    methodsToLog.forEach((method) => {

        if(WrappedComponent.prototype[method]){
            originals[method] = WrappedComponent.prototype[method]
        }

        WrappedComponent.prototype[method] = function (...args) {

            let original = originals[method]

            console.groupCollapsed(`${WrappedComponent.displayName} called ${method}`)

            if(method === "componentWillReceiveProps" ||
                          "shouldComponentUpdate" ||
                          "componentWillUpdate"
            )
            {
                console.log('nextProps', args[0])
            }
            if(method === "shouldComponentUpdate" || "componentWillUpdate")
            {
                console.log('nextState', args[1])
            }
            console.groupEnd()


            if(original){
                original = original.bind(this)
                return original(...args)
            }
            
            if(method === "shouldComponentUpdate" &&
               typeof original === 'undefined'
            ){
                return true
            }
        }

        WrappedComponent.prototype.setState = function(partialState,callback){

            console.groupCollapsed(`${WrappedComponent.displayName} setState` )
            console.log('partialState',partialState)
            console.log('callback',callback)
            console.groupEnd()
            this.updater.enqueueSetState(this,partialState,callback, 'setState')
        }
    })

    return class extends Component {

        render(){
            return (
                <LoggerContainer>
                    <H2>{WrappedComponent.displayName} is now loggified</H2>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </LoggerContainer>
            )
        }
    }


}

const LoggerContainer = styled.div`
    background-color: aliceblue;
    border: 2px grooved aquamarine;
    border-radius: 5px;
`
LoggerContainer.displayName = "LoggerContainer"

const H2 = styled.h2`
    color: blueviolet;
`

H2.displayName = "H2"