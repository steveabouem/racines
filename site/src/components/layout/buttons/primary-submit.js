import React from 'react';

export default class ButtonPrimary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }

    this.hideIcon = this.hideIcon.bind(this);
    this.showIcon = this.showIcon.bind(this);
  }

  hideIcon() {
    this.setState({
      ishovered: false
    });
  }

  showIcon() {
    this.setState({
      ishovered: true
    });
  }

  render() {
    return (
      <button
        className='button-primary'
        type='submit'
        onClick={this.props.onClick}
        onMouseOver={this.showIcon}
        onMouseLeave={this.hideIcon}
      >
        {this.props.url ?
          <a href={this.props.url}>{this.props.value}</a>
          :
          this.props.value
        } 
        <span className='material-icons'
              style={{ filter: 'opacity(' + (this.state.ishovered ? '1)' : '0)') }}
            >
              {this.props.name}
          </span>
      </button>
    );
  }
}