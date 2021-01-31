import React from 'react';

interface Props {
  titleText: string;
  bodyText: string;
  tags: string[]; //  egs
}

const generateTags = (tags: string[]) => {
  let egs: string = '';
  tags.map((tag: string) => {
    egs += `• ${tag} `;
    return 1;
  });
  return <b>{egs}</b>;
};

const InfoParagraph = ({ titleText, bodyText, tags }: Props) => (
  <div>
    <h3>{titleText}</h3>
    <div>{bodyText}</div>
    {tags && generateTags(tags)}
  </div>
);

export default InfoParagraph;
