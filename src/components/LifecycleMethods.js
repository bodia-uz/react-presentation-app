import React, { Component } from 'react';
import Helmet from "react-helmet";

import Counter from './Counter';

// https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods

class LifecycleMethods extends Component {
  constructor(props) {
    super(props);

    this.state = {value: 1};

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState(state => ({value: state.value -1 }))
  }

  increment() {
    this.setState(state => ({value: state.value +1 }))
  }

  render() {
    return (
      <div>
        <Helmet title="Lifecycle Methods"/>
        <Counter
            value={this.state.value}
            decrement={this.decrement}
            increment={this.increment}
        />
      </div>
    );
  }
}

export default LifecycleMethods;