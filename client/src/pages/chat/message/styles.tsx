import styled from 'styled-components';

interface MessagerProps {
  messager: boolean;
}

export const Container = styled.div<MessagerProps>`
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  max-width: ${(props) => (props.messager ? '30%' : '60%')};
  background-color: ${(props) => (props.messager ? props.theme.colors.secondary : props.theme.colors.teritary)};
`;

export const ArrowBottom = styled.div<MessagerProps>`
  position: absolute;
  right: ${(props) => (props.messager ? 0 : '100%')};
  bottom: -20px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 0px solid transparent;
  border-top: 20px solid ${(props) => (props.messager ? props.theme.colors.secondary : props.theme.colors.teritary)};
`;

export const MessageContainer = styled.div`
  word-wrap: break-word;
  overflow-wrap: anywhere;
`;
