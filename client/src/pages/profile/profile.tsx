import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { actions as loginActions } from '../login';

import Header from '../../shared/containers/header/index';
import Kanye from '../../assets/kanye.jpg';

const { setUser } = loginActions;

type LinkObj = {
  display: string;
  href: string;
};

interface HeaderProps {
  links: LinkObj[];
  photo: string;
  isProfile: boolean;
  isInvestor: boolean;
  isVerified: boolean;
  firstName: string;
  lastName: string;
  business: string;
  memberSince: string;
}

const DUMMY_DATA: HeaderProps = {
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
    onAuthUIStateChange((authState, authData) => {
      dispatch(setUser({ authState, user: authData }));
    });
  }, []);

  return (
    <div>
      <Header
        links={DUMMY_DATA.links}
        photo={DUMMY_DATA.photo}
        isProfile
        isInvestor={DUMMY_DATA.isInvestor}
        isVerified={DUMMY_DATA.isVerified}
        firstName={DUMMY_DATA.firstName}
        lastName={DUMMY_DATA.lastName}
        business={DUMMY_DATA.business}
        memberSince={DUMMY_DATA.memberSince}
      />
      <AmplifySignOut />
    </div>
  );
};

export default Profile;
