
// Server Component (default)
const ServerRouteFetch = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const post = await res.json();

    return (
        <div className="border p-4 bg-green-50">
            <h2 className="font-semibold">✅ ServerRouteFetch (Triggers loading.tsx)</h2>
            <p>{post.title}</p>
        </div>
    );
};

export default ServerRouteFetch;
