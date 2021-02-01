import styled from 'styled-components';
import { FlexRow } from '../../styles/flex';

export const VerifiedWrapper = styled(FlexRow)`
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  & span {
    padding-left: 10px;
  }
`;
