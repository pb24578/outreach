import React from 'react';
import SummaryList from './summaryList';

interface Props {
  isInvestor: boolean;
  location: string;
  memberSince: string;
  partnerships: number;
  earnings: number;
}

const KPIList = ({ isInvestor, location, memberSince, partnerships, earnings }: Props) => {
  const iconList = ['mapMarkerAlt', 'calendarAlt', 'handsHelping', 'moneyCheckAlt'];
  const infoList = [
    location,
    `Member Since ${memberSince}`,
    `${partnerships} ${isInvestor ? 'Business' : 'Investor'} Partnerships`,
    `Earned ${isInvestor ? 'Businesses' : 'Investors'} over $${earnings}`,
  ];
  const kpis = [
    {
      icon: iconList[0],
      info: infoList[0],
    },
    {
      icon: iconList[1],
      info: infoList[1],
    },
    {
      icon: iconList[2],
      info: infoList[2],
    },
    {
      icon: iconList[3],
      info: infoList[3],
    },
  ];
  return <SummaryList kpis={kpis} />;
};

export default KPIList;
