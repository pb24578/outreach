import React from 'react';
import styled from 'styled-components';
import { FlexCenter, FlexColumn, FlexRow } from '../../shared/styles';
import { ContactImage } from '../../assets';

interface ContactProps {
  selected: boolean;
  name: string;
  message: string;
}

interface SelectedProps {
  selected: boolean;
}

const Container = styled(FlexRow)``;

const ContactContainer = styled(FlexRow)<SelectedProps>`
  align-items: center;
  width: 408px;
  height: 100px;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
  background-color: ${(props) => (props.selected ? props.theme.colors.secondary : 'none')};
`;

const ArrowRight = styled.div<SelectedProps>`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid ${(props) => (props.selected ? props.theme.colors.secondary : 'none')};
`;

const Profile = styled(FlexCenter)`
  flex: 0.3;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
`;

const ContactIcon = styled.img`
  width: 40%;
  height: 57%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const ChatContent = styled(FlexColumn)`
  flex: 0.7;
  margin-left: 20px;
`;

const Name = styled.h3<SelectedProps>`
  margin: 0;
  width: 100%;
  font-size: 36px;
  color: ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.secondary)};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const RecentMessage = styled.div<SelectedProps>`
  width: 100%;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
  color: ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.white)};
`;

export const Contact = (props: ContactProps) => {
  const { message, name, selected } = props;
  return (
    <Container>
      <ContactContainer selected={selected}>
        <Profile>
          <ContactIcon src={ContactImage} />
        </Profile>
        <ChatContent>
          <Name selected={selected}>{name}</Name>
          <RecentMessage selected={selected}>{message}</RecentMessage>
        </ChatContent>
      </ContactContainer>
      <ArrowRight selected={selected} />
    </Container>
  );
};
