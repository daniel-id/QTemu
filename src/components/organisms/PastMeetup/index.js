import React, {Component} from 'react';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import Card from '../../molecules/Card';
import './style.css';
import TextGroup from '../../atoms/TextGroup';

export default class PastMeetup extends Component {
  constructor() {
    this.state = {
      isOpened: false
    }
  }
  
  renderSeeAll() {
    return this.props.schedule.map((eachSchedule, index) => {
      return (
       <Card 
          date = {eachSchedule.date}
          id = {eachSchedule.id}
          topic = {eachSchedule.topic}
          participants = {eachSchedule.participants}
       />
      )
    })
  }
  
  renderCard() {
    return this.props.schedule.map((eachSchedule, index) => {
      if (index <= 2) {
        return (
         <Card 
            date = {eachSchedule.date}
            id = {eachSchedule.id}
            topic = {eachSchedule.topic}
            participants = {eachSchedule.participants}
         />
        )
      }
    })
  }
  
  renderContent() {
    if (this.state.isOpened) {
      this.renderSeeAll();
    } else {
      this.renderCard();
    }
  }

  render() {
    return (
      <div>
        <TextGroup className="PastMeetup">
          <Title text='Past Meetup' className='Subtitle'/>
          <Link text='See All' className='SeeAll' onClick={() => this.setState({isOpenend: true})}/>

          <div className = 'CardGroup'>
           {this.renderContent()}
          </div>
        </TextGroup>
      </div>
    )
  }
}
