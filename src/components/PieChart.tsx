'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Card, CardContent, Typography, Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [
    'HTML/CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'MUI',
    'Python',
    'Cybersecurity',
    'Node.js',
    'FastAPI / Django',
    'Flutter / Dart',
    'graphql',
  ],
  datasets: [
    {
      data: [80, 70, 60, 50, 50, 70, 40, 40, 60, 30, 40, 20],
      backgroundColor: [
        '#FF6E46', // HTML/CSS – vibrant orange
        '#FFCF3E', // JavaScript – warm gold
        '#72A8FF', // TypeScript – modern blue
        '#22D3EE', // React – cyan
        '#111827', // Next.js – near-black
        '#578CFF', // MUI – royal blue
        '#3776AB', // Python – official blue
        '#FF4949', // Cybersecurity – strong red
        '#6AFFA1', // Node.js – green
        '#54FFEB', // Backend – teal
        '#B96FFF', // Three.js – purple
        '#FF70B8', // GraphQL – pink
      ],
      borderWidth: 0,
      borderColor: '#000000',
      cutout: '50%',
    },
  ],
};

const options: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,

  layout: {
    padding: {
      left: 50,
      top: 10,
      bottom: 10,
    },
  },

  plugins: {
    legend: {
      position: 'left',

      labels: {
        font: {
          size: 20,
          weight: 'bold',
        },

        usePointStyle: true,
        pointStyle: 'rectRounded',
        boxWidth: 12,
        boxHeight: 12,
        padding: 18,
      },
    },
  },
};

export default function SkillsDoughnutChart() {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom align="center">
          Skill Distribution
        </Typography>

        <Box sx={{ height: 500 }}>
          <Doughnut data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
}
