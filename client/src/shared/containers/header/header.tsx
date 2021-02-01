import React from 'react';

import {
  HeaderWrapper,
  HeaderNav,
  HeaderContent,
  CircularImgBig,
  ProfileContent,
  DashboardVerifiedWrapper,
  DashboardContent,
} from './styles';
import VerifiedText from '../verifiedText/index';

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

type LinkObj = {
  display: string;
  href: string;
};

// generate the links
const generateNavLinks = (links: LinkObj[]) => {
  const list: React.ReactElement[] = [];

  links.map((link): object => {
    const { href, display }: LinkObj = link as LinkObj;
    list.push(
      <a key={href} href={href}>
        {display}
      </a>,
    );
    return link;
  });
  return list;
};

const getHeaderType = (isProfile: boolean, isInvestor: boolean) => {
  const typeArray: boolean[] = [
    isProfile && isInvestor, // investorProfile
    isProfile && !isInvestor, // businessProfile
    !isProfile && isInvestor, // investorDashboard
    !isProfile && !isInvestor, // businessDashboard
  ];

  let x: number = 0;
  for (; x < typeArray.length; x += 1) {
    if (typeArray[x] === true) return x;
  }
  return -1;
};

const generateContent = (
  type: number,
  photo: string,
  isVerified: boolean,
  firstName: string,
  lastName: string,
  business: string,
  memberSince: string,
) => {
  const image = <CircularImgBig photo={photo} />;
  const title = (text: string) => <h1>{text}</h1>;
  const subtitle = (text: string) => <h2>{text}</h2>;

  switch (type) {
    case 0: // investorProfile
      return (
        <ProfileContent>
          {image}
          <div className="TextInfo">
            {title(`${firstName} ${lastName}`)}
            {subtitle('Investor')}
            {isVerified && <VerifiedText text="Verified Profile" />}
          </div>
        </ProfileContent>
      );
    case 1: // businessProfile
      return (
        <ProfileContent>
          {image}
          <div className="TextInfo">
            {title(`${firstName} ${lastName}`)}
            {subtitle(business)}
            {isVerified && <VerifiedText text="Verified Minority-Owned Business Owner" />}
          </div>
        </ProfileContent>
      );
    case 2: // investorDashboard
    case 3: // businessDashboard
      return (
        <DashboardContent>
          <DashboardVerifiedWrapper>{isVerified && <VerifiedText text="Verified Profile" />}</DashboardVerifiedWrapper>
          {title('My Dashboard')}
          {subtitle(`Member Since ${memberSince}`)}
        </DashboardContent>
      );
    default:
      return <div />;
  }
};

// generate the header
const Header = ({
  links,
  photo,
  isProfile,
  isInvestor,
  isVerified,
  firstName,
  lastName,
  business,
  memberSince,
}: HeaderProps) => {
  const headerType: number = getHeaderType(isProfile, isInvestor);

  return (
    <HeaderWrapper photo={photo}>
      <HeaderNav>{generateNavLinks(links)}</HeaderNav>
      <HeaderContent isProfile={isProfile}>
        {generateContent(headerType, photo, isVerified, firstName, lastName, business, memberSince)}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
