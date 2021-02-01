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

// const generateKPIs = (kpis: KPI[]) => {};

// // const SummaryList = ({ kpis }: Props) => <SummaryListWrapper>{generateKPIs(kpis)}</SummaryListWrapper>;

// export default SummaryList;
