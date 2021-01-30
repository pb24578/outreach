import styled from 'styled-components';

interface MessagerProps {
  messager: boolean;
}

export const Container = styled.div`
  position: relative;
  max-width: 60%;
`;

export const ArrowBottom = styled.div<MessagerProps>`
  position: absolute;
  right: ${(props) => (props.messager ? 0 : '100%')};
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  border-top: 20px solid ${(props) => (props.messager ? props.theme.colors.secondary : props.theme.colors.teritary)};
`;

export const MessageContainer = styled.div<MessagerProps>`
  padding: 15px 20px;
  word-wrap: break-word;
  overflow-wrap: anywhere;
  background-color: ${(props) => (props.messager ? props.theme.colors.secondary : props.theme.colors.teritary)};
`;
