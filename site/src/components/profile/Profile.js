import React from 'react';
import Navigation from '../layout/menus/Navigation';
import Loader from '../layout/modals/Loader';
import Calendar from './Calendar';
import BirthdaysFeed from './BirthdaysFeed';
import EventsCreator from './EventsCreator';
import {content} from '../../assets/content/navigationLinks'
import {profileContent} from '../../assets/content/profile';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      language: 'french',//get it from redux props
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div className='page-container' id='profile'>
        <Navigation links={content[this.state.language].links}/>
        {
          this.state.isLoading ? 
          <Loader />
        :
            <div className='section-container'>
                <div className='section-headers'>
                  <h1>{profileContent[this.state.language].title}</h1>
                </div>
              <div className='section-container-flat'>
                <div className='half-container'>
                  <EventsCreator language={this.state.language}/>
                  <BirthdaysFeed language={this.state.language}/>
                </div>
                <div className='half-container'>
                  <Calendar language={this.state.language}/>
                </div>
              </div>
          </div>
        }
      </div>
    );
  }
}