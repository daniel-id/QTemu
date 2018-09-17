import React, {Component} from 'react';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import Card from '../../molecules/Card';
import './style.css';
import TextGroup from '../../atoms/TextGroup';

export default class PastMeetup extends Component {

  render() {
    return (
      <div>
        <TextGroup className="PastMeetup">
          <Title text='Past Meetup' className='Subtitle'/>
          <Link text='See All' className='SeeAll'/>

          <div className = 'CardGroup'>
            <Card 
              date = {this.props.date}
              id = {this.props.id}
              topic = {this.props.topic}
              participants = {this.props.participants}
            />
            <Card 
              date = {this.props.date1}
              id = {this.props.id1}
              topic = {this.props.topic1}
              participants = {this.props.participants1}
            />
            <Card 
              date = {this.props.date2}
              id = {this.props.id2}
              topic = {this.props.topic2}
              participants = {this.props.participants2}
            />
          </div>
        </TextGroup>
      </div>
    )
  }
}
