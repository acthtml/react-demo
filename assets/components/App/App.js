import React, { Component } from 'react';
import classnames from 'classnames';

import 'normalize.css';
import './layout.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={classnames('wrapper fullbleed layout vertical', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
