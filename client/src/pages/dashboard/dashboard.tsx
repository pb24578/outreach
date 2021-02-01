import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData, isBusinessOwner, isInvestor } from '../login';

import Header from '../../shared/containers/header';
import Chat from '../../shared/containers/chat';
import Kanye from '../../assets/kanye.jpg';

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

const Dashboard = () => {
  const userData = useSelector(getUserData);
  if (!userData) {
    return <div />;
  }
  return (
    <div>
      <Header
        links={DUMMY_DATA.links}
        photo={userData.profilePicture}
        isProfile={false}
        isInvestor={isInvestor(userData)}
        isVerified={isBusinessOwner(userData) ? userData.certificate !== null : true}
        firstName={userData.firstName}
        lastName={userData.lastName}
        business={isBusinessOwner(userData) ? userData.businessName : ''}
        memberSince={DUMMY_DATA.memberSince}
      />
      <Link to={`/profile?id=${userData.id}`}>To Profile</Link>
      <Chat />
    </div>
  );
};

export default Dashboard;
