import React from 'react';
import ButtonPrimary from '../layout/buttons/primary-submit';
import { loginContent } from '../../assets/content/loginForm';

class LoginForm extends React.Component {
    constructor() {
        super();
        this.state = {
          ishovered: false,
          language: 'french'
        };
    }

    render() {
        return (
            <div className='section-container'>
            <div classNam='section-headers'>
              <h1>
                {loginContent[this.state.language].welcome}
              </h1>
            </div>
            <form className='login-form'>
              {loginContent[this.state.language].inputs.map(input => {
                let key = 0;
                return (
                  <div key={key += .1}>
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
                onClick={this.props.login}
                value='Soumettre'
                name='check_box'
              />
            </form>
          </div>
        );
    }
}

export default LoginForm