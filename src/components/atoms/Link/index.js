import React, {Component} from 'react';
import './style.css';

export default class Link extends Component {

  render() {
    return (
      <a className={this.props.className}>{this.props.text}</a>
    );
  }
}
