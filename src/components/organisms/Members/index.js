import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import './style.css';

export default class Members extends Component {

  render() {
    return(
      <div>
        <div className="Members">
          
          <Title text='Members' className='Subtitle'/>
          <Link text='See All' className='SeeAll'/>
          
          <div id="Members-Body">
            <p className='Members-ProfilePic'>
              <img width={120} height={120} src="https://3ek9gx368g2n28ygtw3vknmg-wpengine.netdna-ssl.com/wp-content/uploads/sites/4/2015/10/placeholder-circle-1.png" alt="thumbnail" />
            </p>
            <div className='Members-Detail'>
              <p className='Members-Type'>Organizer</p>
              <span className='Members-Name'>Adhy Wiranata</span>
              <span className='Members-Total'>4 others</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
