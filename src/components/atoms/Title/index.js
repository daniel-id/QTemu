import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Title extends Component {

  render() {
    return (
      <span className={this.props.className}>{this.props.text}</span>
    );
  }
}