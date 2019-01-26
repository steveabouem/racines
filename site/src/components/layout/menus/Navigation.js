import React from 'react';
import { directory } from '../../../assets/images/icons/directory';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userIsGuest: true,
      userIsFamily: false,
      links: props.links
    }
  }
  render() {
    return (
      <ul className='navigation-top'>
        {this.state.links.map(link => {
          console.log(window.location, link.url);
          
          return (
            <li>
              <div className='nav-link-container'>
                <div className='material-icons'
                  style={{ filter: 'opacity(' + (window.location.pathname === link.url ? '1)' : '0)')}}
                >
                  {directory[link.icon]}
                </div>
                <a href={link.url}>
                  {link.text}
                </a>
              </div>
            </li>
          );
        })
        }
      </ul>
    );
  }
}