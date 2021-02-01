import styled from 'styled-components';
import { FlexRow } from '../../../../shared/styles';

export const Container = styled(FlexRow)`
  align-items: center;
  padding: 14px 0px 14px 28px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.teritary};
`;

export const MessageInput = styled.input.attrs({
  type: 'text',
})`
  flex: 0.925;
  font-size: 24px;
  outline: none;
  border: none;
  border-width: 0;
  color: ${(props) => props.theme.colors.quaternary};
  background-color: transparent;
`;

export const SendIcon = styled.img`
  width: 0.025;
  height: 100%;
  cursor: pointer;
`;
