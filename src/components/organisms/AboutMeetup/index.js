import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup';
import Title from '../../atoms/Title';
import './style.css';

export default class AboutMeetup extends Component {

  render() {
    return(
      <div>
        <TextGroup className = 'AboutMeetup'>
          <Title className ='Title' text='About Meetup'/>
          <TextGroup className="AboutMeetup-Body">
            <Text content='Come and meet other developers interested in the JavaScript and its library in Greater Jakarta Area'/>
            <Text content='Twitter {this.props.twitter} and we use the hashtag {this.props.hashtag}'/>
          </TextGroup>
        </TextGroup>
      </div>
    )
  }
}
