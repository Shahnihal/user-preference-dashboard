'use client';

import { useEffect, useState } from 'react';

const SuspenseClientFetch = () => {
    const [comment, setComment] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/comments/1')
                .then((res) => res.json())
                .then(setComment);
        }, 2000); // Delay to simulate streaming
    }, []);

    return (
        <div className="border p-4 bg-purple-50">
            <h2 className="font-semibold">🌀 SuspenseClientFetch (Wrapped in Suspense)</h2>
            <p>{comment?.body ?? 'Loading comment...'}</p>
        </div>
    );
};

export default SuspenseClientFetch;
