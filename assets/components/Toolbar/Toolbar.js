import React, { Component } from 'react';
import classnames from 'classnames';

import './Toolbar.css';

export default class Toolbar extends Component {
  render() {
    return (
      <div className={classnames('toolbar', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}
