import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { actions } from './reducer';

const { setUser } = actions;

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthUIStateChange((authState, authData) => {
      dispatch(setUser({ authState, user: authData }));
    });
  }, []);

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: 'username', label: 'Email Address *', placeholder: 'Enter your email address' },
          { type: 'password' },
        ]}
      />
      <AmplifySignIn slot="sign-in" usernameAlias="email" />
    </AmplifyAuthenticator>
  );
};

export default Login;
