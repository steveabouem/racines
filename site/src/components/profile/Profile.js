import React from 'react';
import Navigation from '../layout/menus/Navigation';
import Loader from '../layout/modals/Loader';
import Calendar from './Calendar';
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

  render() {
    return (
      <div className='page-container'>
        <Navigation links={content[this.state.language].links}/>
        {
          this.state.isLoading ? 
          <Loader />
        :
          <div>
            <h1>{profileContent.french.title}</h1>
            <Calendar />
          </div>
        }
      </div>
    );
  }
}