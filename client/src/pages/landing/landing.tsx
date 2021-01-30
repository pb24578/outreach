/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {
  Wrapper,
  Header,
  NavLinks,
  Title,
  GetStarted,
  Overview,
  Description,
  TargetAudience,
  TeamMembersContainer,
  TeamMembersRow,
  TeamMember,
} from './styles';
import Logo from '../../assets/landing/logo.svg';
import Hands from '../../assets/landing/hands.svg';
import Store from '../../assets/landing/store.svg';
import Check from '../../assets/landing/check.svg';
import Pravat from '../../assets/landing/pravat.jpg';
import Andrew from '../../assets/landing/andrew.jpg';
import Fronrich from '../../assets/landing/fronrich.jpg';

const Landing = () => (
  <Wrapper>
    <Header>
      <img src={Logo} alt="Outreach" />
      <NavLinks>
        <a href="https://online.citi.com/US/login.do" target="_blank" rel="noreferrer">
          Citi Bank
        </a>
        <a href="https://github.com/andrewandyle/outreach" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </NavLinks>
    </Header>
    <Title>
      <h1>Outreach</h1>
      <h2>Humans Who Help Humans</h2>
    </Title>
    <Overview>
      <img src={Hands} alt="Hands" />
      <Description>
        <h3>Who We Are</h3>
        We’re humans helping humans. During these trying times, minority business owners have found it hard to keep
        their businesses afloat. Since COVID began decimating the U.S in 2019, thousands of small businesses across the
        country have gone bankrupt. The impact of these closures on local communities can be devastating. Don’t let this
        pandemic be the end of an era for your local communities. Whether you’re a minority business owner in need of a
        helping hand, or an investor looking to help communities in need, you’ve come to the right place.
      </Description>
    </Overview>
    <Overview>
      <TargetAudience>
        <img src={Store} alt="Store" />
        <div>
          <h3>For Business Owners</h3>
          Need financial help? Use our app to market yourself to investors searching for communities to give back to.
        </div>
      </TargetAudience>
      <TargetAudience>
        <img src={Check} alt="Check" />
        <div>
          <h3>For Investors</h3>
          Passionate about helping others? Sign up today in order to help those who build their communities.
        </div>
      </TargetAudience>
    </Overview>
    <TeamMembersContainer>
      <h3>Meet Our Diverse Team</h3>
      <TeamMembersRow>
        <TeamMember>
          <img src={Pravat} alt="Pravat Bhusal" />
          <a href="https://pravat.bhusal.dev/" target="_blank" rel="noreferrer">
            Pravat Bhusal
          </a>
          Full Stack Engineer
        </TeamMember>
        <TeamMember>
          <img src={Andrew} alt="Andrew Le" />
          <a href="https://aale.dev/" target="_blank" rel="noreferrer">
            Andrew Le
          </a>
          Full Stack Engineer
        </TeamMember>
        <TeamMember>
          <img src={Fronrich} alt="Fronrich Puno" />
          <a href="https://fronrich.github.io/" target="_blank" rel="noreferrer">
            Fronrich Puno
          </a>
          UI/UX Designer
        </TeamMember>
      </TeamMembersRow>
    </TeamMembersContainer>
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <GetStarted>
        <h2>Ready to Reach Out? Sign Up Now</h2>
        <FontAwesomeIcon icon={faCaretRight} size="4x" />
      </GetStarted>
    </Link>
  </Wrapper>
);

export default Landing;
