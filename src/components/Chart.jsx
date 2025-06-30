'use client';

import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const barData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [50000, 40000, 60000, 30000, 70000, 100000],
      backgroundColor: 'rgba(75,192,192,0.6)',
    },
  ],
};

const lineData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Visitors',
      data: [1000, 1500, 1200, 1300, 1700, 1800],
      borderColor: 'rgba(153, 102, 255, 1)',
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Charts Overview' },
  },
};

export default function SalesChart() {
  const [loading, setLoading] = useState(true);

  // Simulate slow component render (like heavy data or animation libraries)
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000); // 3-second delay
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <p>🕒 Loading heavy chart component...</p>;
  }

  return (
    <div>
      <h2>📊 Sales Overview</h2>
      <Bar data={barData} options={options} />
      <br />
      <Line data={lineData} options={options} />
      <p>🔥 This component simulates a heavy render load.</p>
    </div>
  );
}
