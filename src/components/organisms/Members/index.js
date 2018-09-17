import React, {Component} from 'react';
import Img from '../../atoms/Img';
import Link from '../../atoms/Link';
import Text from '../../atoms/Text';
import TextGroup from '../../atoms/TextGroup'
import Title from '../../atoms/Title';
import './style.css';

export default class Members extends Component {

  render() {
    return(
      <div>
        <div className="Members">
          
          <Title text='Members' className='Subtitle'/>
          <Link text='See All' className='SeeAll'/>
          
          <div className="Members-Body">
            <Img
              width= '120px'
              height= '120px'
              src={this.props.icon}
              alt={this.props.alt}
              className= 'ProfilePic'
            />
            <TextGroup className='Members-Detail'>
              <Text content = {this.props.type} className='Members-Type'/>
              <div className = 'Members-Summary'>
                <Text content = {this.props.name} className='Members-Name'/>
                <Text content = {this.props.length} className='Members-Total'/>
                <Text content = {this.props.length < 2 ? 'other.' : 'others.'}/>
              </div>
            </TextGroup>
          </div>
        </div>
      </div>
    )
  }
}
