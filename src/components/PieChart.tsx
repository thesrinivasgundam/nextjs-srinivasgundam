'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// ECharts core imports (optimized build)
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { EChartsOption } from 'echarts';

// Register required components
echarts.use([PieChart, TooltipComponent, LegendComponent, CanvasRenderer]);

// Dynamically import React wrapper
const ReactECharts = dynamic(() => import('echarts-for-react'), {
  ssr: false,
});

const PieCharts = () => {
  const option: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: false,
    },
    series: [
      {
        name: 'Skills',
        type: 'pie',
        radius: ['50%', '75%'], // Doughnut
        avoidLabelOverlap: true,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 7,
        },
        label: {
          show: true,
          position: 'inside',
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
