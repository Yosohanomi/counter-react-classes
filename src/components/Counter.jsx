import React, {Component} from 'react';
export class Counter extends Component {
    state =  {
        step: 1,
    }

    increment = () => {
        // this.setState({step: 2})
        this.setState((prevState)=> {
            return {step: prevState.step + 1}
        })
    }

    decrement = () => {
        // this.setState({step: 2})
        this.setState((prevState)=> {
            return {step: prevState.step - 1}
        })
    }
    

    render() {
        return <div>
            <span>{this.state.step}</span>
            <button onClick={this.increment} type='button'>Increment</button>
            <button onClick={this.decrement} type='button'>Decrement</button>
        </div>
    }

}