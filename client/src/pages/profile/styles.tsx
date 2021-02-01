import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../shared/styles/flex';

const ProfileCol = styled(FlexColumn)`
  width: 25%;
  justify-content: flex-start;
`;

export const LeftCol = styled(ProfileCol)`
  text-align: left;
  align-content: flex-start;
`;

export const RightCol = styled(ProfileCol)`
  text-align: right;
  align-content: flex-end;
`;

export const ProfileBody = styled(FlexRow)`
  justify-content: space-evenly;
  width: 100%;
`;
