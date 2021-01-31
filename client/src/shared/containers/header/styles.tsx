import styled from 'styled-components';
import Dashboard from '../../../pages/dashboard';
import { FlexRow, FlexColumn, FlexCenter } from '../../styles/flex';

interface PhotoProps {
  photo: string;
}

export const HeaderWrapper = styled(FlexColumn)<PhotoProps>`
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

  & a {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export const HeaderContent = styled(FlexCenter)`
  flex-basis: 90%;
`;

// profile headers

export const CircularImgBig = styled.div<PhotoProps>`
  border-radius: 50%;
  width: 90px;
  height: 90px;
  background: url(${(props) => props.photo});
`;

export const ProfileContent = styled(FlexRow)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  text-align: left;

  & div {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const DashboardVerifiedWrapper = styled(FlexRow)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

export const DashboardContent = styled(FlexColumn)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;
