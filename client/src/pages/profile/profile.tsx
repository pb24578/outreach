import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { actions as loginActions, isInvestor } from '../login';

import Header from '../../shared/containers/header/index';

import Kanye from '../../assets/kanye.jpg';

const { setUser } = loginActions;

const DUMMY_DATA: object = {
  links: [{ display: 'hello', href: '/' }],
  photo: Kanye,
  isProfile: true,
  isInvestor: true,
  isVerified: true,
  firstName: 'Kanye',
  lastName: 'West',
  business: 'Cicis',
  memberSince: 'April 2008',
};

const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthUIStateChange((_, authData) => {
      dispatch(setUser(authData));
    });
  }, []);

  return (
    <div>
      <Header links={DUMMY_DATA} />
      <AmplifySignOut />
      Hello World!
    </div>
  );
};

export default Profile;
