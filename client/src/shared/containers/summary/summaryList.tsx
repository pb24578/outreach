import React from 'react';
import Summary from './summary';
import { SummaryListWrapper } from './styles';

type KPI = {
  icon: string;
  info: string;
};

interface Props {
  kpis: KPI[];
}

const generateKPIs = (kpis: KPI[]) => {
  const list: React.ReactElement[] = [];
  kpis.map((kpi): object => {
    const { icon, info }: KPI = kpi;
    list.push(<Summary icon={icon} text={info} />);
    return kpi;
  });
  return list;
};

const SummaryList = ({ kpis }: Props) => (
  <SummaryListWrapper>
    {/* generating kpis */}
    {generateKPIs(kpis)}
  </SummaryListWrapper>
);

export default SummaryList;
