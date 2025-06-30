'use client';

import dynamic from 'next/dynamic';

const SalesChart = dynamic(() => import('../../components/Chart'), {
  loading: () => <p>Loading chart...</p>,
  ssr: false, // optional, disables SSR for client-only libs like chart.js
});

export default function LazyCharts() {
  return (
    <main>
      <h1>Lazy Charts Page</h1>
      <SalesChart />
    </main>
  );
}
