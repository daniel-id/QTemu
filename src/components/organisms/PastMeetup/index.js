import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Link from '../../atoms/Link';
import Title from '../../atoms/Title';
import './style.css';

export default class PastMeetup extends Component {

  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div className="PastMeetup">
        <Title text='Past Meetup' className='Subtitle'/>
        <Link text='See All' className='SeeAll'/>
        {/* <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>27 November 2017</CardTitle>
              <hr />
              <CardSubtitle>
                #39 JakartaJS April Meetup with kumparan
              </CardSubtitle>
              <br />
              <CardText>139 went</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>27 October 2017</CardTitle>
              <hr />
              <CardSubtitle>
                #39 JakartaJS April Meetup with BliBli
              </CardSubtitle>
              <br />
              <CardText>113 went</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>27 September 2017</CardTitle>
              <hr />
              <CardSubtitle>
                #39 JakartaJS April Meetup with Hacktiv8
              </CardSubtitle>
              <br />
              <CardText>110 went</CardText>
              <Button>View</Button>
            </CardBody>
          </Card>
        </CardGroup> */}
      </div>
    );
  }
}
