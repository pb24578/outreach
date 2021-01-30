import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { actions as loginActions } from '../login';

const { setAuthState, setUser } = loginActions;

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthUIStateChange((nextAuthState, authData) => {
      dispatch(setAuthState(nextAuthState));
      dispatch(setUser(authData));
    });
  }, []);

  return (
    <div>
      <AmplifySignOut />
      Hello World!
    </div>
  );
};

export default Profile;
