import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';
import {
  actions as loginActions,
  BusinessOwner,
  Investor,
  isBusinessOwner,
  isInvestor,
  getUserData,
  loadOtherUserData,
  loadUserData,
  CognitoUser,
} from '../login';

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
  const thisUserData = useSelector(getUserData);
  const [userData, setUserData] = useState<Investor | BusinessOwner>();

  const setOtherUserData = async (idParam: string | null) => {
    if (idParam) {
      // load the other user's data and set the user data state
      const otherUserData = await loadOtherUserData(idParam);
      setUserData(otherUserData);
    } else {
      // no URL parameter specified, so show this user's data instead
      setUserData(thisUserData);
    }
  };

  useEffect(() => {
    onAuthUIStateChange(async (authState, user) => {
      const userData = await loadUserData(user as CognitoUser);
      dispatch(setUser({ authState, user, userData }));
    });
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const idParam = urlParams.get('id');
    setOtherUserData(idParam);
  }, []);

  if (!userData) {
    return <div />;
  }

  return (
    <div>
      <Header
        links={DUMMY_DATA.links}
        photo={userData.profilePicture}
        isProfile
        isInvestor={isInvestor(userData)}
        isVerified={isBusinessOwner(userData) ? userData.certificate !== null : true}
        firstName={userData.firstName}
        lastName={userData.lastName}
        business={isBusinessOwner(userData) ? userData.businessName : ''}
        memberSince={DUMMY_DATA.memberSince}
      />
      <ProfileBody>
        <LeftCol>
          <InfoParagraph titleText="EGSs" tags={userData.tags} />
          <InfoParagraph titleText="About Me" bodyText={userData.bio} />
          {isBusinessOwner(userData) && <InfoParagraph titleText="Why We Need Help" bodyText={userData.storyBio} />}
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
