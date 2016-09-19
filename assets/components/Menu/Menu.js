import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Ink from 'react-ink';

import './Menu.css'

class Menu extends Component {
  render() {
    return (
      <ul className={classnames('menu', this.props.className)}>
        {this.props.children}
      </ul>
    );
  }
}

// Menu.props = {
//   children: PropTypes.instanceOf(React.DOM.li)
// }


class MenuItem extends Component {
  render() {
    return (
      <li className={classnames('menu-item', this.props.className)}>
        {this.props.children}
        <Ink/>
      </li>
    )
  }
}


export {
  Menu,
  MenuItem
}
