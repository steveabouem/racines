import React from 'react';
import { signUpContent } from '../../assets/content/loginForm';
import ButtonPrimary from '../layout/buttons/primary-submit';

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = {
            ishovered: false
        };
    }

    render() {
        return (
            <div className='section-container'>
            <div classNam='section-headers'>
              <h1>
                {signUpContent.french.welcome}
              </h1>
            </div>
            <form className='login-form'>
              {signUpContent.french.inputs.map(input => {
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
                onClick={this.props.signup}
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
        );
    }
}

export default SignupForm