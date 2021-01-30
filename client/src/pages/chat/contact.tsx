import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../shared/styles';
import { ContactImage } from '../../assets';

const Profile = styled(FlexCenter)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContactIcon = styled.img`
  width: 47px;
  height: 57px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Contact = () => (
  <div>
    <Profile>
      <ContactIcon src={ContactImage} />
    </Profile>
  </div>
);
