import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    console.log('Counter.constructor', props);
  }

  componentWillMount() {
    console.log('Counter.componentWillMount');
  }

  componentDidMount() {
    console.log('Counter.componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Counter.componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Counter.shouldComponentUpdate');

    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Counter.componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('Counter.componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Counter.componentWillUnmount');
  }

  render() {
    const { value, decrement, increment } = this.props;

    return (
        <div>
          <button onClick={decrement}>
            -1
          </button>
          <span> {this.props.value} </span>
          <button onClick={increment}>
            +1
          </button>
        </div>
    )
  }
}

export default Counter;
