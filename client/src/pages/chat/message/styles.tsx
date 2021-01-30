import styled from 'styled-components';
import { FlexCenter } from '../../../shared/styles';

interface MessagerProps {
  messager: boolean;
}

export const Container = styled(FlexCenter)<MessagerProps>`
  background-color: ${(props) => (props.messager ? props.theme.colors.secondary : props.theme.colors.teritary)};
`;
