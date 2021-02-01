import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, IconProp } from '@fortawesome/fontawesome-svg-core';
import { VerifiedWrapper } from '../verifiedText/styles';
import { KPIWrapper, IconContainer } from './styles';

interface KPIProps {
  icon: any;
  text: string;
}

const Summary = ({ icon, text }: KPIProps) => (
  <KPIWrapper>
    <IconContainer>
      <FontAwesomeIcon icon={icon} color="#EDF060" />
    </IconContainer>
    <h3>{text}</h3>
  </KPIWrapper>
);

export default Summary;
