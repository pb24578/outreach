import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import { actions as loginActions, loadUserData, CognitoUser } from '../login';

import { LeftCol, RightCol, ProfileBody, MockGallery } from './styles';

import InfoParagraph from '../../shared/containers/infoParagraph/index';

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

const content =
  'We’re humans helping humans. During these trying times, minority business owners have found it hard to keep their businesses afloat. Since COVID began decimating the U.S in 2019, thousands of small businesses across the country have gone bankrupt.';

const egsTags = [
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
  'hello',
];

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
    onAuthUIStateChange(async (authState, user) => {
      const userData = await loadUserData(user as CognitoUser);
      dispatch(setUser({ authState, user, userData }));
    });
  }, []);

  return (
    <div>
      <Header
        links={DUMMY_DATA.links}
        photo="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/141735394_280487163498802_1432936418341671874_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=4tndq88xgcsAX_sRg5u&_nc_ht=scontent-atl3-1.xx&oh=31ae573da285eab6328b86b68525109f&oe=603D76F5"
        isProfile
        isInvestor={DUMMY_DATA.isInvestor}
        isVerified={DUMMY_DATA.isVerified}
        firstName={DUMMY_DATA.firstName}
        lastName={DUMMY_DATA.lastName}
        business={DUMMY_DATA.business}
        memberSince={DUMMY_DATA.memberSince}
      />
      <ProfileBody>
        <LeftCol>
          <InfoParagraph titleText="EGSs" tags={egsTags} />
          <InfoParagraph titleText="About Me" bodyText={content} />
          <InfoParagraph titleText="Why We Need Help" bodyText={content} />
        </LeftCol>
        <RightCol>
          {MockGallery()}
          <InfoParagraph titleText="Find Us Online!" urls={DUMMY_DATA.links} />
        </RightCol>
      </ProfileBody>
      <AmplifySignOut />
    </div>
  );
};

export default Profile;
