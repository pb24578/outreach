import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../styles/flex';

export const VerifiedWrapper = styled(FlexRow)`
  flex-direction: row;
  /* align-items: center; */
  justify-content: flex-start;
  width: auto;
  & span {
    padding-left: 10px;
  }
`;
