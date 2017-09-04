import React, { Component } from 'react'
import loggify from './loggify'
import {Parent,H4,H5,Column,ChildContainer} from "./styled";
import {BigList} from './lists'

class App extends Component {

    static displayName = "App"

    state = {
        parentPoll: "No data yet!"
    }

    componentDidMount(){
        this.createParentPoll()
        this.canvasCtx = this.refs.appCanvas.getContext('2d')
        this.canvasCtx.fillStyle = "blue"
        this.canvasCtx.arc(75, 75, 50, 0, 2 * Math.PI )
        this.canvasCtx.fill()
    }

    componentWillUpdate(nextProps,nextState){
        if(nextState.parentPoll !== this.state.parentPoll){
            this.canvasCtx.clearRect(0,0,200,200)
        }
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.parentPoll !== this.state.parentPoll){
            let {canvasCtx} = this
            canvasCtx.fillStyle = (this.state.parentPoll % 2 === 1) ? "green" : "red"
            canvasCtx.arc(75,75,50,0,2*Math.PI)
            canvasCtx.fill()
        }
    }

    componentWillUnMount(){
        clearInterval(this.pollInterval)
    }

    shouldComponentDidUpdate(nextProps,nextState){
        if(nextState.parentPoll !== this.state.parentPoll){
            return true
        }
        return false
    }

    createParentPoll(){
        this.pollInterval = setInterval(
            () =>{
                this.setState({parentPoll: getRandomInt(1,2)})
            },
            1000
        )
    }
    render() {
        let {showPollChild,parentPoll} = this.state

        return (
            <Parent>
                <Column>

                    <H4>{parentPoll}</H4>
                    <canvas
                        ref={"appCanvas"}
                        height={200}
                        width={200}
                    />
                    <button onClick={() =>{
                        this.setState((prevState) => {
                            return {
                                showPollChild: !prevState.showPollChild
                            }
                        })
                    }}>
                        {(showPollChild)? "Hide" : "Show"} PollChild
                    </button>
                    {(showPollChild)?
                        <PollChild
                            parentPoll = {parentPoll}
                        /> : null}
                </Column>
                <Column>
                    <BigList/>
                </Column>
            </Parent>
        )
    }
}

class PollChild extends Component{
    static displayName = "PollChild"

    state = {
        poll : Math.random()
    }

    componentDidMount(){
//        this.pollData()
    }

    componentWillUnmount(){
        clearInterval(this.pollInterval)
    }

    pollData = () => {
        this.pollInterval = setInterval(
            () => {
                console.log("Poll!!")
                this.setState({
                    poll : getRandomInt(1,4)
                })
            }, 1000
        )
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.parentPoll !== this.state.parentPoll){
            return true
        }
        if(nextState.poll !== this.state.poll){
            return true
        }
        return false
    }

    render(){

        return(
            <ChildContainer>
                <H5>{this.state.poll}</H5>
                <H5>{this.props.parentPoll}</H5>
            </ChildContainer>

        )
    }

}

function getRandomInt(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}
//App = loggify(App)
//PollChild = loggify(PollChild)
export default App