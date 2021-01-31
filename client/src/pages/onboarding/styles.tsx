import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../shared/styles/flex';

export const Wrapper = styled(FlexColumn)`
  padding: 0 20%;

  & h1 {
    font-size: 9em;
    margin-block: 0;
  }

  & h2 {
    font-size: 3em;
    margin-block: 0;
    color: ${(props) => props.theme.colors.secondary};
  }

  & h3 {
    font-size: 1.75em;
    margin-block: 0.5em;
    margin-top: 30px;
    color: ${(props) => props.theme.colors.secondary};
  }

  & a {
    color: ${(props) => props.theme.colors.primary};
    &:visited {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  & span {
    font-size: 24px;
  }
`;

export const Title = styled(FlexColumn)`
  align-items: center;
  text-align: center;
  margin-bottom: 40px;
  padding: 0 50px;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
  height: 40px;
  font-size: 24px;
  padding-left: 15px;
  margin-bottom: 20px;
  width: 100%;

  &::placeholder {
    font-size: 24px;
  }

  &:focus {
    outline: none;
  }
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 24px;
  height: 24px;
  margin-bottom: 0;
  cursor: pointer;
`;

export const MultilineTextInput = styled.textarea`
  font-family: 'Roboto';
  resize: none;
  font-size: 24px;
  padding-left: 15px;
  padding-top: 15px;
  margin-bottom: 20px;
  width: 100%;
  height: 150px;

  &::placeholder {
    font-size: 24px;
  }

  &:focus {
    outline: none;
  }
`;

export const CheckboxContainer = styled(FlexRow)`
  align-items: center;
  margin-bottom: 20px;

  & input {
    width: 24px;
  }

  & span {
    padding-left: 10px;
  }
`;

export const UserSection = styled.div`
  margin: 50px 0;
`;

export const SubmitContainer = styled(FlexCenter)`
  flex-direction: column;
`;

export const UpdateInfo = styled.button`
  width: 200px;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 50px;
  border: none;
  font-size: 24px;
  cursor: pointer;

  & span {
    margin-right: 10px;
  }

  &:hover {
    filter: saturate(1.5);
  }
`;
