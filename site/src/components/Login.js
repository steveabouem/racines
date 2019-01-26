import React from 'react';
import Navigation from './layout/menus/Navigation';
import { content } from '../assets/content/navigationLinks';
import { loginContent } from '../assets/content/loginForm';
import Loader from './layout/modals/Loader';
import ButtonPrimary from './layout/buttons/primary-submit';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      language: 'french',//get it from redux props,
      ishovered: false
    };

    this.login = this.login.bind(this);
  }
  
  login() {
    console.log('pending');
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <div className='page-container' id='login'>
          <Navigation links={content[this.state.language].links} />
          {this.state.isLoading ? <Loader /> :
          <div className='section-container'>
            <div classNam='section-headers'>
              <h1>
                {loginContent.french.welcome}
              </h1>
            </div>
            <form className='login-form'>
              {loginContent.french.inputs.map(input => {
                return (
                  <div>
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
                onClick={this.login}
                value='Soumettre'
                name='check_box'
              >
                <span className='material-icons'
                    style={{ filter: 'opacity(' + (this.state.ishovered ? '1)' : '0)') }}
                  >
                    check_box
                </span>
              </ButtonPrimary>
            </form>
          </div>
          }
      </div>
    );
  }
}