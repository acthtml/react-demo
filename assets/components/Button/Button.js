import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import Ink from 'react-ink';
import Icon from '../Icon';
import './Button.css';

export default class Button extends Component {

  constructor(props){
    super();

    // 按钮的z-index深度
    let depth = 0;
    if(props.type == 'rasied') depth = 1;

    this.state = {depth};
  };

  toggle = () => {
    if(this.props.type == 'disabled' || !this.props.toggles) return;

    let depth = this.state.depth == 1 ? 3 : 1;
    this.setState({depth});
  };

  render() {
    let icon = this.props.icon ? <Icon icon={this.props.icon} key="1"/> : '';
    let ink = this.props.noink ? '' : <Ink/>;
    let children = [this.props.children];
    if(this.props.iconPosition == 'left'){
      children.unshift(icon)
    }else{
      children.push(icon);
    }

    let iconButtonClassName = React.Children.count(this.props.children) == 0 ? 'button-icon' : '';

    return (
      <div className={classnames('button', this.props.type, `depth${this.state.depth}`, iconButtonClassName, this.props.block ? 'button-block' : '')} onMouseDown={this.toggle} onMouseUp={this.toggle}>
        {children}
        {ink}
      </div>
    );
  };
}

Button.propTypes = {
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['link', 'rasied', 'disabled']),
  toggles: PropTypes.bool,
  block: PropTypes.bool,
  noink: PropTypes.bool
}

Button.defaultProps = {
  icon: '',
  iconPosition: 'left',
  type: 'link',
  toggles: false,
  block: false,
  noink: false
}
