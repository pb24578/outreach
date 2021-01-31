import React from 'react';
import { VerifiedWrapper } from './styles';
import { ReactComponent as VerifiedIcon } from './media/verified_button.svg';

interface Text {
  text: string;
}

const VerifiedText = ({ text }: Text) => (
  <VerifiedWrapper>
    <VerifiedIcon />
    <span>{text}</span>
  </VerifiedWrapper>
);

export default VerifiedText;
