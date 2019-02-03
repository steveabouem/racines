import React from 'react';
import { signupContent } from '../../assets/content/loginForm';
import ButtonPrimary from '../layout/buttons/primary-submit';

class SignupForm extends React.Component {
    constructor() {
        super();
        this.state = {
          ishovered: false,
          language: 'french',
        };
    }

    render() {
        return (
            <div className='section-container'>
            <div className='section-headers'>
              <h1>
                {signupContent[this.state.language].welcome}
              </h1>
            </div>
            <form className='login-form'>
              {signupContent[this.state.language].inputs.map(input => {
                return (
                  <div key={input.for}>
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