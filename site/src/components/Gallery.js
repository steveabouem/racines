import React from 'react';
import Navigation from './layout/menus/Navigation';
import {content} from '../assets/content/navigationLinks'

export default class Gallery extends React.Component {
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
        <h1>GALLERY SECTION</h1>
      </div>
    );
  }
}