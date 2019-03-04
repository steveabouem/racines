import React from 'react';
import Navigation from './layout/menus/Navigation';
import ButtonPrimary from './layout/buttons/primary-submit';
import { content } from '../assets/content/navigationLinks';
import { guestContent } from '../assets/content/guestPage';

export default class Guest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      language: 'french',// send it from context in Routes component
    };
  }

  render() {
    return (
      <div className='page-container' id='guest-page'>
        <Navigation links={content[this.state.language].links} />
        <div className='section-container'>
          <div className='section-headers'>
            <h1>{guestContent[this.state.language].welcome}</h1>
            <h2>{guestContent[this.state.language].subtitle}</h2>
          </div>
          <p>
            {guestContent[this.state.language].introduction}
          </p>
        </div>
        <div className='section-container'>
          <span className='two-buttons-horizontal'>
            <ButtonPrimary
              value={guestContent[this.state.language].optionOne}
              name='people'
              url='/genealogie'
            />
            <ButtonPrimary
              value={guestContent[this.state.language].optionTwo}
              name='lock'
              url='/connexion'
            />
          </span>
        </div>
      </div>
    );
  }
}