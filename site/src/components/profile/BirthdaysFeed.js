import React from 'react';
import {profileContent} from '../../assets/content/profile';

class BirthdaysFeed extends React.Component {
  render() {
    let content = profileContent[this.props.language].birthdays;
    return (
      <div className='birthdays-feed-container'>
        <div className='section-headers'>
          <h4>{content.header}</h4>
        </div>
        <ul>
          {content.siblings.map(sibling => {
            return (
              <li>
                <div className='feed-tag'>
                  {content.birthdayTag}
                </div>
                <div className='feed-item'>
                  {sibling.name} {content.isturning} {sibling.age} ({sibling.dob})!
                </div>
              </li>
           );
         })}
        </ul>
      </div>
    );
  }
}

export default BirthdaysFeed