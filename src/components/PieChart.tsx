'use client';

import dynamic from 'next/dynamic';
import Box from '@mui/material/Box';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';

// Register required components
echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer]);

// Register DM Sans theme
echarts.registerTheme('dmSansTheme', {
  textStyle: {
    fontFamily: 'DM Sans, sans-serif',
  },
});

const ReactECharts = dynamic(() => import('echarts-for-react'), {
  ssr: false,
});

const PieCharts = () => {
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
      backgroundColor:'#1e1e1e',
      borderRadius: 12,
      textStyle:{
        color:'#ffffff',
        fontSize: 11,
        fontWeight: 700,
      },
      formatter:(params: any) => `${params.name.toUpperCase()} : ${params.value}%`,
    },
    legend: {
      show: false,
      bottom: 10,
      left: 'center',
      padding: 12,
      backgroundColor: '#1e1e1e',
      borderRadius: 12,
      textStyle: {
        color: '#ffffff',
        fontSize: 12,
      },
      formatter: (name: string) => name.toUpperCase(),
    },
    series: [
      {
        name: 'Skills',
        type: 'pie',
        radius: ['20%', '75%'],
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 3,
        },
        label: {
          show: true,
          position: 'inside',
          formatter: ({ name }) => name.toUpperCase(),
          fontWeight: 'bold',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 18,
            fontWeight: 'bold',
          },
        },
        data: [
          { value: 90, name: 'HTML' },
          { value: 80, name: 'CSS' },
          { value: 90, name: 'JavaScript' },
          { value: 70, name: 'TypeScript' },
          { value: 80, name: 'React' },
          { value: 80, name: 'Tailwind CSS' },
          { value: 80, name: 'Next.js' },
          { value: 70, name: 'MUI' },
          { value: 60, name: 'Python' },
          { value: 30, name: 'GraphQL' },
          { value: 60, name: 'Django' },
          { value: 50, name: 'Dart' },
          { value: 60, name: 'Flutter' },
        ],
      },
    ],
  };

  return (
    <Box sx={{ width: 500, height: 500 }}>
      <ReactECharts
        echarts={echarts}
        option={option}
        style={{ height: '100%', width: '100%' }}
      />
    </Box>
  );
};

export default PieCharts;