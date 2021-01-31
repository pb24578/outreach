import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserData } from './selectors';
import { isBusinessOwner, isInvestor } from './types';

const Dashboard = () => {
  const userData = useSelector(getUserData);
  if (isBusinessOwner(userData)) {
    console.log('this is a business owner', userData);
  } else if (isInvestor(userData)) {
    console.log('this is an investor', userData);
  }
  return (
    <div>
      <Link to="/profile">To Profile</Link>
    </div>
  );
};

export default Dashboard;
