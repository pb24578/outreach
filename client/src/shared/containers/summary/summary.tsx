import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { VerifiedWrapper } from '../verifiedText/styles';
import { KPIWrapper } from './styles';

interface KPIProps {
  icon: string;
  text: string;
}

const Summary = ({ icon, text }: KPIProps) => (
  <VerifiedWrapper>
    <FontAwesomeIcon icon={icon as IconProp} />
    <span>{text}</span>
  </VerifiedWrapper>
);

export default Summary;
