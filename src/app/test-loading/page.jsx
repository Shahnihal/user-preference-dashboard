import ServerRouteFetch from './ServerRouteFetch';
import ClientRouteFetch from './ClientRouteFetch';
import DelayedServer from './DelayedServer';
import SuspenseClientFetch from './SuspenseClientFetch';
import { Suspense } from 'react';

export default function TestLoadingPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">🧪 Test: Loading Behavior</h1>

      <ServerRouteFetch />
      <ClientRouteFetch />

      <Suspense fallback={<p>⏳ Suspense loading (client fetch)...</p>}>
        <SuspenseClientFetch />
      </Suspense>

      <DelayedServer />
    </div>
  );
}
