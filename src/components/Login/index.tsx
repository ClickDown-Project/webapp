import React from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { UilEnvelopeOpen, UilPadlock, UilQuestionCircle } from '@iconscout/react-unicons';
import { PrimaryButton, SecondaryButton } from '../../shared/elements/Buttons';
import './styles.scss';

const Login: React.FC = () => {
  const handleSubmitForm = () => {};

  return (
    <div className="login-wrapper">
      <div className="login-page-new__header">
        <img
          src="https://www.amocrm.com/static/images/pages/integrations/logo/clickup.png"
          className="login-page-new__header-logo"
          alt="Logo"
        />
        <div className="login-page-left__action">
          <span className="login-page-new__header-right-text">
            Don't have an account?
          </span>
          <SecondaryButton styles="login-page-new__header-right-button" child="Sign Up" size="lg" />
        </div>
      </div>
      <div className="login-page-new__main">
        <div className="login-page-new__main-container">
          <div className="login-page-new__main-form">
            <div className="login-page-new__main-form-title text-center">
              Welcome back!
            </div>
            <div className="login-form">
              <Form onSubmit={handleSubmitForm}>
                <div className="login-form-item">

                  <span className="login-form-label">Email</span>
                  <InputGroup className="login-form-input">
                    <InputGroup.Text id="email">
                      <UilEnvelopeOpen />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Enter your email"
                      size="sm"
                    />
                  </InputGroup>
                </div>
                <div className="login-form-item">
                  <span className="login-form-label">Password</span>
                  <InputGroup className="login-form-input">
                    <InputGroup.Text id="email">
                      <UilPadlock />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Enter password"
                      size="sm"
                      type="password"
                    />
                  </InputGroup>
                </div>
                <PrimaryButton styles="login-form-btn__submit" size="lg" child="Log In" />
              </Form>

              <div className="login-form-redirect__link">
                <a href="#">
                  or login with SSO
                </a>
              </div>
            </div>
          </div>

          <div className="login-page-new__main-bot">
            let's make the world more productive, together.
          </div>
          <a href="" className="login-page-new__main-help">
            <UilQuestionCircle />
            <div className="login-page-new__main-help-text">Help</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
