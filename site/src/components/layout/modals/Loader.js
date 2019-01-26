import React from 'react';

export default class Loader extends React.Component {
  render() {
    return (
      <div className='loader'>
        <span className='material-icons'>
          hourglass_full
        </span>
      </div>
    );
  }
}