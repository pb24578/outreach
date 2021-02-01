import styled, { ThemeProvider } from 'styled-components';
import { FlexRow, FlexColumn } from '../../styles/flex';

export const KPIWrapper = styled(FlexRow)`
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  & span {
    padding-left: 10px;
  }
`;

export const SummaryListWrapper = styled(FlexColumn)`
  height: auto;
  text-align: left;
`;
