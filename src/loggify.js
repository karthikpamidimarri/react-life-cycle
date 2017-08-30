import React, {Component} from 'react'
import styled from 'styled-components'

export default function loggify(WrappedComponent) {
    
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