import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './Icon.css'

/**
 * @see  https://design.google.com/icons/
 */
export default class Icon extends Component {
  render(){
    return (
      <div className={classnames('icon')}>{this.props.icon}</div>
    );
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired
}
