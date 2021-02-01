import styled from 'styled-components';
import { FlexCenter, FlexColumn, FlexRow } from '../../../../shared/styles';

interface SelectedProps {
  selected: boolean;
}

export const Container = styled(FlexRow)`
  margin: 8px 0px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary};
`;

export const ContactContainer = styled(FlexRow)<SelectedProps>`
  align-items: center;
  width: 90%;
  height: 100px;
  border-top-left-radius: 48px;
  border-bottom-left-radius: 48px;
  background-color: ${(props) => (props.selected ? props.theme.colors.secondary : 'none')};
`;

export const ArrowRight = styled.div<SelectedProps>`
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid ${(props) => (props.selected ? props.theme.colors.secondary : 'none')};
`;

export const Profile = styled(FlexCenter)`
  width: 100px;
  height: 100%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const ContactIcon = styled.img`
  width: 40%;
  height: 57%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ChatContent = styled(FlexColumn)`
  margin-left: 20px;
`;

export const Name = styled.h3<SelectedProps>`
  margin: 0;
  width: 100%;
  font-size: 36px;
  color: ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.secondary)};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const BusinessLocation = styled.div<SelectedProps>`
  width: 100%;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 300;
  color: ${(props) => (props.selected ? props.theme.colors.primary : props.theme.colors.teritary)};
`;
