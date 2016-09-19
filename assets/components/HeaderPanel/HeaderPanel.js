import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './HeaderPanel.css';

class HeaderPanel extends Component {
  render() {
    return (
      <div className={classnames('header-pannel', this.props.className, this.props.mode)}>
        {this.props.children}
      </div>
    )
  }
}

HeaderPanel.propTypes = {
  mode: PropTypes.oneOf(['standard', 'seamed', 'waterfall', 'waterfall-tall', 'scroll', 'cover'])
}
HeaderPanel.defaultProps = {
  mode: 'standard'
}


class Header extends Component {
  render() {
    return (
      <div className={classnames('header-pannel-header', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}


class Body extends Component {
  render() {
    return (
      <div className={classnames('header-pannel-body', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}


export {
  HeaderPanel,
  Header,
  Body
}
