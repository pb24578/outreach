import React from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { FlexRow, FlexColumn, FlexCenter } from '../../shared/styles/flex';

const ProfileCol = styled(FlexColumn)`
  width: 40%;
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
  padding-top: 40px;
  justify-content: space-evenly;
  width: 100%;
`;

export const MockGallery = () => {
  const photos = [
    {
      src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799',
      width: 1,
      height: 1,
    },
    {
      src: 'https://source.unsplash.com/qDkso9nvCg0/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/iecJiKe_RNg/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/zh7GEuORbUw/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/PpOHJezOalU/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/I1ASdgphUH4/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/XiDA78wAZVw/600x799',
      width: 3,
      height: 4,
    },
    {
      src: 'https://source.unsplash.com/x8xJpClTvR0/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/u9cG4cuJ6bU/4927x1000',
      width: 4927,
      height: 1000,
    },
    {
      src: 'https://source.unsplash.com/qGQNmBE7mYw/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/NuO6iTBkHxE/800x599',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/pF1ug8ysTtY/600x400',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/A-fubu9QJxE/800x533',
      width: 4,
      height: 3,
    },
    {
      src: 'https://source.unsplash.com/5P91SF0zNsI/740x494',
      width: 4,
      height: 3,
    },
  ];

  const MockGalleryWrapper = styled.div`
    display: flex;
    width: 100%;
    max-height: 500px;
    overflow-y: scroll;
  `;
  return (
    <MockGalleryWrapper>
      <Gallery photos={photos} />
    </MockGalleryWrapper>
  );
};
