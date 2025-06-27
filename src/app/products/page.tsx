export default async function ProductsPage() {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();

    return (
        <main>
            <h1 className="text-2xl">Product List (SSG)</h1>
            <ul>
                {products.map((p: any) => (
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </main>
    );
}