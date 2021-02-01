import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from '../login';
import { isBusinessOwner, isInvestor } from './types';

import Header from '../../shared/containers/header/index';
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
        photo={DUMMY_DATA.photo}
        isProfile={false}
        isInvestor={DUMMY_DATA.isInvestor}
        isVerified={DUMMY_DATA.isVerified}
        firstName={DUMMY_DATA.firstName}
        lastName={DUMMY_DATA.lastName}
        business={DUMMY_DATA.business}
        memberSince={DUMMY_DATA.memberSince}
      />
      <Link to="/profile">To Profile</Link>
    </div>
  );
};

export default Dashboard;
