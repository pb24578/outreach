import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AmplifyAuthenticator, AmplifySignUp, AmplifySignIn } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { getAuthState, getUser } from './selectors';
import { actions } from './reducer';

const { setAuthState, setUser } = actions;

const Login = () => {
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  const user = useSelector(getUser);

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(setAuthState(nextAuthState));
      if (authData) {
        dispatch(setUser(authData));
      }
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <Redirect to="/dashboard" />
  ) : (
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
