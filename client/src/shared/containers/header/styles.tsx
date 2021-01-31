import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../styles/flex';

interface SelectedProps {
  photo: string;
}

export const HeaderWrapper = styled(FlexColumn)<SelectedProps>`
  width: 100%;
  height: 400px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(0deg, rgba(7, 16, 19, 0.74), rgba(7, 16, 19, 0.74)), url(${(props) => props.photo});
`;

export const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 10px;

  & div {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const HeaderContent = styled(FlexCenter)`
  flex-basis: 90%;
`;
