import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './DrawerPanel.css';

class DrawerPanel extends Component {
  render() {
    return (
      <div className={classnames('drawer-panel', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

DrawerPanel.propTypes = {

}

class DrawerLeft extends Component {
  render() {
    return (
      <div className={classnames('drawer-panel-left', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

class DrawerRight extends Component {
  render() {
    return (
      <div className={classnames('drawer-panel-right', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}


class DrawerMain extends Component {
  render() {
    return (
      <div className={classnames('drawer-panel-main', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
}

export {
  DrawerPanel,
  DrawerLeft,
  DrawerRight,
  DrawerMain
}
