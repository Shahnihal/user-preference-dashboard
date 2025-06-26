const DelayedServer = async () => {
    await new Promise((res) => setTimeout(res, 3000));

    return (
        <div className="border p-4 bg-red-50">
            <h2 className="font-semibold">⏱️ DelayedServer (Triggers loading.tsx)</h2>
            <p>Delayed content rendered after 3s.</p>
        </div>
    );
};

export default DelayedServer;
