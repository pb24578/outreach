import React from 'react';
import { Wrapper } from './styles';

interface Props {
  titleText: string;
  bodyText?: string;
  tags?: string[]; //  egs
  urls?: LinkObj[];
}

type LinkObj = {
  display: string;
  href: string;
};

// generate ESG tags
const generateTags = (tags: string[]) => {
  let egs: string = '';
  tags.map((tag: string) => {
    egs += `#${tag} `;
    return 1;
  });
  return <b>{egs}</b>;
};

// generate links
const generateLinks = (links: LinkObj[]) => {
  const list: React.ReactElement[] = [];
  links.map((link): object => {
    const { href, display }: LinkObj = link as LinkObj;
    list.push(
      <p key={href}>
        <a href={href}>{display}</a> +
      </p>,
    );
    return link;
  });
  return list;
};

const InfoParagraph = ({ titleText, bodyText, tags, urls }: Props) => (
  <Wrapper>
    <h3>{titleText}</h3>
    <div>{bodyText}</div>
    {tags && generateTags(tags)}
    {urls && generateLinks(urls)}
  </Wrapper>
);

export default InfoParagraph;
