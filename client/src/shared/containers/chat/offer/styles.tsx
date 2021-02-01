import styled from 'styled-components';
import { FlexCenter, FlexRow } from '../../../styles';

interface MessagerProps {
  messager: boolean;
}

export const Container = styled.div<MessagerProps>`
  width: 304px;
  height: 168px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => (props.messager ? props.theme.colors.teritary : props.theme.colors.secondary)};
`;

export const LetterContainer = styled.div`
  padding: 17px 15px 15px 15px;
  font-weight: 900;
  font-size: 24px;
`;

export const ButtonContainer = styled(FlexRow)`
  margin: 0px 9px;
`;

export const AcceptButton = styled(FlexCenter)<MessagerProps>`
  flex: 0.45;
  padding: 5px 28px;
  height: 26px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.messager ? props.theme.colors.teritary : props.theme.colors.secondary)};
`;

export const DenyButton = styled(FlexCenter)<MessagerProps>`
  flex: 0.45;
  padding: 5px 28px;
  height: 26px;
  cursor: pointer;
  font-weight: 900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.messager ? props.theme.colors.secondary : props.theme.colors.teritary)};
`;
