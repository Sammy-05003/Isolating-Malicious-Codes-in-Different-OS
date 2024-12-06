import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { SystemResource } from '../types';
import { getSystemResources } from '../utils/systemMonitor';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const SystemMonitor: React.FC = () => {
  const [resources, setResources] = useState<SystemResource[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setResources(getSystemResources());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    labels: resources.map(r => r.name),
    datasets: [
      {
        label: 'Resource Usage (%)',
        data: resources.map(r => r.usage),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'System Resource Monitor'
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">System Resource Monitor</h2>
      <div className="h-64">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};