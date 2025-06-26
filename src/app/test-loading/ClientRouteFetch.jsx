'use client';

import { useEffect, useState } from 'react';

const ClientRouteFetch = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
      .then((res) => res.json())
      .then(setPost);
  }, []);

  return (
    <div className="border p-4 bg-yellow-50">
      <h2 className="font-semibold">❌ ClientRouteFetch (No loading.tsx)</h2>
      <p>{post?.title ?? 'Loading inside component...'}</p>
    </div>
  );
};

export default ClientRouteFetch;
