import React from 'react';
import { FlexTen } from '../../../../shared/styles';
import { AcceptButton, ButtonContainer, Container, DenyButton, LetterContainer } from './styles';

interface OfferProps {
  messager: boolean;
  name: string;
  price: number;
  apy: number;
}

export const Offer = (props: OfferProps) => {
  const { messager, name, price, apy } = props;
  const offerLetter = `${name} has sent you an offer of $${price} with ${apy * 100}% apy!`;
  return (
    <Container messager={messager}>
      <LetterContainer>{offerLetter}</LetterContainer>
      <ButtonContainer>
        <DenyButton messager={messager}>Deny</DenyButton>
        <FlexTen />
        <AcceptButton messager={messager}>Accept</AcceptButton>
      </ButtonContainer>
    </Container>
  );
};
