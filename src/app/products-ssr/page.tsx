export const dynamic = 'force-dynamic'; // SSR enabled

export default async function TimePage() {
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <h1 className="text-2xl">Server Time (SSR)</h1>
            <p>{time}</p>
        </div>
    );
}