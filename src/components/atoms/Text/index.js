import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Text extends Component {

  render() {
    return (
      <p
        className={this.props.className}>
        {this.props.content}
      </p>
    );
  }
}
