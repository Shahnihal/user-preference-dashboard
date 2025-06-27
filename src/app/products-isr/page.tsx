// app/isr-test/page.tsx
export const revalidate = 10;

export default async function ISRTest() {
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <h1>ISR Time Page</h1>
            <p>Rendered at: {time}</p>
        </div>
    );
}