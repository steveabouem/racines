import React from 'react';
import { profileContent } from '../../assets/content/profile';
import ButtonPrimary from '../layout/buttons/primary-submit';

class EventsCreator extends React.Component {
  render() {
    let content = profileContent[this.props.language].createEvent;

    return (
      <div className='events-feed-container'>
         <div className='section-headers'>
          <h4>{content.welcome}</h4>
        </div>
        <div className='event-form'>
          {content.inputs.map(input => {
            let key = input.for;
            return (
              <div key={key}>
                <label htmlFor={input.for}>
                  {input.label}
                </label>
                <br />
                <input
                  type={input.type}
                  placeholder={input.placeHolder && input.placeHolder}
                />
              </div>
            );
          })}
          <ButtonPrimary
            onClick={this.props.createEvent}
            value={content.submit}
            name='check_box'
          />
        </div>
      </div>
        
    );
  }
}

export default EventsCreator