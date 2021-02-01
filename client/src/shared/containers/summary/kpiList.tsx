import React from 'react';
import { faMapMarkerAlt, faCalendarAlt, faHandsHelping, faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
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
      icon: faMapMarkerAlt,
      info: infoList[0],
    },
    {
      icon: faCalendarAlt,
      info: infoList[1],
    },
    {
      icon: faHandsHelping,
      info: infoList[2],
    },
    {
      icon: faMoneyCheckAlt,
      info: infoList[3],
    },
  ];
  return <SummaryList kpis={kpis} />;
};

export default KPIList;
