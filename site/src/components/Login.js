import React from 'react';
import Navigation from './layout/menus/Navigation';
import LoginForm from './login/LoginForm';
import SignUpForm from './login/SignupForm';
import { content } from '../assets/content/navigationLinks';
import Loader from './layout/modals/Loader';
import ButtonPrimary from './layout/buttons/primary-submit';
import { signUpContent, loginContent } from '../assets/content/loginForm';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: true,
      language: 'french',//get it from redux props,
      ishovered: false,
      isNewUser: true,
    };
    this.switchForm=this.switchForm.bind(this);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }
  
  switchForm() {
    this.setState({
      isNewUser: !this.state.isNewUser
    });
  }

  login(e) {
    console.log('pending');
  }

  signup(e) {
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
            <div>
              <div className='login-picker'>
                {
                  this.state.isNewUser ?
                  signUpContent.french.processChangeTag
                :
                  loginContent.french.processChangeTag
                }
                <br/>
                <ButtonPrimary
                    name={'refresh'}
                    value={
                            this.state.isNewUser ?
                            signUpContent.french.processChange
                          :
                            loginContent.french.processChange
                          }
                    onClick={this.switchForm}
                />
                </div>
              {
                this.state.isNewUser ?
                <SignUpForm
                  signup={e =>{this.signup(e);}}
                />
              :
                !this.state.isNewUser && 
                <LoginForm
                  login={e =>{this.login(e);}}
                />
              }
            </div>
          }
      </div>
    );
  }
}