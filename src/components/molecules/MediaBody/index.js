import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup';
import './style.css';

export default class MediaBody extends Component { 
  
  render() {
    return(
      <TextGroup className='DataSet'>
        <Text content={this.props.title} className='DataTitle'/>
        <div className='DataDetail'>
          <div className='space25px'>
            <Text content='Location'/>
            <Text content='Members'/>
            <Text content='Organizer'/>
          </div>
          <div className='space25px'>
            <Text content=':'/>
            <Text content=':'/>
            <Text content=':'/>
          </div>
          <div>
            <Text content={this.props.location}/>
            <Text content={this.props.totalMembers}/>
            <Text content={this.props.organizer}/>
          </div>
        </div>
        <button className='Join'>Join Us</button>
      </TextGroup>
    )
  }
}