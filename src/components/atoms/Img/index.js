import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Img extends Component {

  render() {
    return (
      <img 
        width={this.props.width}
        height={this.props.height}
        src={this.props.src}
        alt={this.props.alt}
        className={this.props.className}
      />
    );
  }
}
