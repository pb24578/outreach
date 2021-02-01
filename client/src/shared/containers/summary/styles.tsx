import styled, { ThemeProvider } from 'styled-components';
import { FlexRow, FlexColumn } from '../../styles/flex';

export const KPIWrapper = styled(FlexRow)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  & h3 {
    padding-left: 30px;
    line-height: 0;
  }
`;

export const IconContainer = styled.div`
  width: 10px;
  height: auto;
`;

export const SummaryListWrapper = styled(FlexColumn)`
  height: auto;
  text-align: left;
`;
