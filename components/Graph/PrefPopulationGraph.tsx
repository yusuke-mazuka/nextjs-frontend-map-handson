/** @jsxImportSource @emotion/react */
import { theme } from '@/app/theme/theme';
import { PrefPopulation } from '@/types/Response';
import { excludeAllfromPref } from '@/utils/excludeAllfromPref';
import { css } from '@emotion/react';
import { UpdateMode } from 'chart.js';

import { Bar } from 'react-chartjs-2';

type Props = {
  prefPopulationList: PrefPopulation[];
  updateMode: UpdateMode;
};

const PrefPopulationGraph = ({ prefPopulationList, updateMode }: Props) => {
  const exceptAll = excludeAllfromPref(prefPopulationList);
  const labels = exceptAll.map((pref) => pref.prefName);
  const populationData = exceptAll.map((pref) => pref.population);
  const data = {
    labels,
    datasets: [
      {
        label: '人口',
        data: populationData,
        backgroundColor: theme.palette.primary.light,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    scales: {
      x: {
        title: {
          display: true,
          text: '単位：人',
          align: 'end' as const,
        },
      },
    },
    transitions: {
      active: {
        animation: {
          duration: 0,
        },
      },
      show: {
        animation: {
          duration: 500,
        },
      },
    },
  };

  const style = css`
    width: 100%;
    height: 1200px;
  `;

  return (
    <div css={style}>
      <Bar options={options} data={data} updateMode={updateMode} />
    </div>
  );
};

export default PrefPopulationGraph;
