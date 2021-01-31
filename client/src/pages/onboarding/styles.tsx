import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../shared/styles/flex';

export const Wrapper = styled(FlexColumn)`
  padding: 0 20%;

  & h3 {
    font-size: 1.75em;
    margin-block: 0.5em;
    color: ${(props) => props.theme.colors.secondary};
  }

  & a {
    color: ${(props) => props.theme.colors.primary};
    &:visited {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  & input {
    width: 100%;
  }
`;

export const Title = styled(FlexColumn)`
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 50px;

  & h1 {
    font-size: 9em;
    margin-block: 0;
  }

  & h2 {
    font-size: 3em;
    margin-block: 0;
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export const CheckboxContainer = styled(FlexRow)`
  font-size: 24px;
  align-items: center;
  margin-bottom: 10px;

  & input {
    width: 24px;
  }

  & span {
    padding-left: 10px;
  }
`;
