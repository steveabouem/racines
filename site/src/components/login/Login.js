import React from 'react';
import Navigation from '../layout/menus/Navigation';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm';
import { content } from '../../assets/content/navigationLinks';
import Loader from '../layout/modals/Loader';
import ButtonPrimary from '../layout/buttons/primary-submit';
import { signupContent, loginContent } from '../../assets/content/loginForm';

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
                  signupContent[this.state.language].processChangeTag
                :
                  loginContent[this.state.language].processChangeTag
                }
                <br/>
                <ButtonPrimary
                    name={'refresh'}
                    value={
                            this.state.isNewUser ?
                            signupContent[this.state.language].processChange
                          :
                            loginContent[this.state.language].processChange
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